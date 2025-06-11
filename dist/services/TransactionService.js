"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
class TransactionService {
    createTransaction(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const { eventId, ticketTypeId, userEmail, quantity, promoCode, referralCode, } = input;
            return yield prisma_1.default.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
                const event = yield tx.event.findUnique({ where: { id: eventId } });
                if (!event)
                    throw new Error("Event not found");
                if (event.availableSeats < quantity) {
                    throw new Error("Not enough seats available");
                }
                let unitPrice = 0;
                // Tentukan harga per tiket
                if (!event.isFree) {
                    if (ticketTypeId) {
                        const ticket = yield tx.ticketType.findUnique({
                            where: { id: ticketTypeId },
                        });
                        if (!ticket)
                            throw new Error("Invalid ticket type");
                        unitPrice = ticket.price;
                    }
                    else {
                        unitPrice = event.price;
                    }
                }
                let total = unitPrice * quantity;
                // Cek promo
                if (promoCode) {
                    const promo = yield tx.promotion.findUnique({
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
                    }
                    else if (promo.discountPct) {
                        total -= Math.floor((promo.discountPct / 100) * total);
                    }
                    // Naikkan usage promo
                    yield tx.promotion.update({
                        where: { code: promoCode },
                        data: { currentUsage: { increment: 1 } },
                    });
                }
                // Cek referral
                if (referralCode) {
                    const referrer = yield tx.user.findUnique({ where: { referralCode } });
                    const referredUser = yield tx.user.findUnique({
                        where: { email: userEmail },
                    });
                    if (referrer && referredUser) {
                        yield tx.referralUsage.create({
                            data: {
                                referrerId: referrer.id,
                                referredUserId: referredUser.id,
                            },
                        });
                        // Diskon 10% untuk pengguna referral
                        total -= Math.floor(total * 0.1);
                    }
                }
                const transaction = yield tx.transaction.create({
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
                yield tx.event.update({
                    where: { id: eventId },
                    data: {
                        availableSeats: { decrement: quantity },
                    },
                });
                return {
                    transactionId: transaction.id,
                    totalPaid: total,
                };
            }));
        });
    }
}
exports.TransactionService = TransactionService;
