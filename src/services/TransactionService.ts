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

    // --- STEP 1: Pre-validation & prepare data ---
    const event = await prisma.event.findUnique({ where: { id: eventId } });
    if (!event) throw new Error("Event not found");
    if (event.availableSeats < quantity) throw new Error("Not enough seats");

    let unitPrice = event.price;
    if (!event.isFree && ticketTypeId) {
      const ticket = await prisma.ticketType.findUnique({
        where: { id: ticketTypeId },
      });
      if (!ticket) throw new Error("Invalid ticket type");
      unitPrice = ticket.price;
    }

    let total = unitPrice * quantity;

    let promo = null;
    if (promoCode) {
      promo = await prisma.promotion.findUnique({ where: { code: promoCode } });
      if (!promo || new Date(promo.expiresAt) < new Date()) {
        throw new Error("Invalid or expired promo code");
      }
      if (promo.maxUsage && promo.currentUsage >= promo.maxUsage) {
        throw new Error("Promo usage limit reached");
      }

      // Apply discount
      if (promo.discountIDR) total -= promo.discountIDR;
      else if (promo.discountPct) {
        total -= Math.floor((promo.discountPct / 100) * total);
      }
    }

    let referrerId: string | null = null;
    let referredUserId: string | null = null;
    if (referralCode) {
      const referrer = await prisma.user.findUnique({
        where: { referralCode },
      });
      const referred = await prisma.user.findUnique({
        where: { email: userEmail },
      });

      if (referrer && referred) {
        referrerId = referrer.id;
        referredUserId = referred.id;
        total -= Math.floor(0.1 * total); // Apply referral discount
      }
    }

    // --- STEP 2: Transaction ---
    const result = await prisma.$transaction(async (tx) => {
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

      await tx.event.update({
        where: { id: eventId },
        data: {
          availableSeats: { decrement: quantity },
        },
      });

      if (promo) {
        await tx.promotion.update({
          where: { code: promoCode },
          data: { currentUsage: { increment: 1 } },
        });
      }

      if (referrerId && referredUserId) {
        await tx.referralUsage.create({
          data: {
            referrerId,
            referredUserId,
          },
        });
      }

      return {
        transactionId: transaction.id,
        totalPaid: total,
      };
    });

    return result;
  }
}
