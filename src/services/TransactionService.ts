import prisma from "../utils/prisma";

interface CreateTransactionInput {
  eventId: string;
  ticketTypeId?: string;
  userEmail: string;
  quantity: number;
  promoCode?: string;
  referralCode?: string;
}

export class TransactionService {
  async createTransaction(input: CreateTransactionInput) {
    const {
      eventId,
      ticketTypeId,
      userEmail,
      quantity,
      promoCode,
      referralCode,
    } = input;

    return await prisma.$transaction(async (tx) => {
      const event = await tx.event.findUnique({ where: { id: eventId } });
      if (!event) throw new Error("Event not found");

      if (event.availableSeats < quantity) {
        throw new Error("Not enough seats available");
      }

      let unitPrice = 0;

      // Tentukan harga per tiket
      if (!event.isFree) {
        if (ticketTypeId) {
          const ticket = await tx.ticketType.findUnique({
            where: { id: ticketTypeId },
          });
          if (!ticket) throw new Error("Invalid ticket type");
          unitPrice = ticket.price;
        } else {
          unitPrice = event.price;
        }
      }

      let total = unitPrice * quantity;

      // Cek promo
      if (promoCode) {
        const promo = await tx.promotion.findUnique({
          where: { code: promoCode },
        });

        if (!promo || new Date(promo.expiresAt) < new Date()) {
          throw new Error("Invalid or expired promo code");
        }

        if (promo.maxUsage && promo.currentUsage >= promo.maxUsage) {
          throw new Error("Promo usage limit reached");
        }

        // Hitung diskon
        if (promo.discountIDR) {
          total -= promo.discountIDR;
        } else if (promo.discountPct) {
          total -= Math.floor((promo.discountPct / 100) * total);
        }

        // Naikkan usage promo
        await tx.promotion.update({
          where: { code: promoCode },
          data: { currentUsage: { increment: 1 } },
        });
      }

      // Cek referral
      if (referralCode) {
        const referrer = await tx.user.findUnique({ where: { referralCode } });
        const referredUser = await tx.user.findUnique({
          where: { email: userEmail },
        });

        if (referrer && referredUser) {
          await tx.referralUsage.create({
            data: {
              referrerId: referrer.id,
              referredUserId: referredUser.id,
            },
          });

          // Diskon 10% untuk pengguna referral
          total -= Math.floor(total * 0.1);
        }
      }

      const transaction = await tx.transaction.create({
        data: {
          eventId,
          ticketTypeId,
          userEmail,
          quantity,
          totalPaid: total,
          promoCode,
          referralCode,
        },
      });

      // Update available seats
      await tx.event.update({
        where: { id: eventId },
        data: {
          availableSeats: { decrement: quantity },
        },
      });

      return {
        transactionId: transaction.id,
        totalPaid: total,
      };
    });
  }
}
