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
            // --- STEP 1: Pre-validation & prepare data ---
            const event = yield prisma_1.default.event.findUnique({ where: { id: eventId } });
            if (!event)
                throw new Error("Event not found");
            if (event.availableSeats < quantity)
                throw new Error("Not enough seats");
            let unitPrice = event.price;
            if (!event.isFree && ticketTypeId) {
                const ticket = yield prisma_1.default.ticketType.findUnique({
                    where: { id: ticketTypeId },
                });
                if (!ticket)
                    throw new Error("Invalid ticket type");
                unitPrice = ticket.price;
            }
            let total = unitPrice * quantity;
            let promo = null;
            if (promoCode) {
                promo = yield prisma_1.default.promotion.findUnique({ where: { code: promoCode } });
                if (!promo || new Date(promo.expiresAt) < new Date()) {
                    throw new Error("Invalid or expired promo code");
                }
                if (promo.maxUsage && promo.currentUsage >= promo.maxUsage) {
                    throw new Error("Promo usage limit reached");
                }
                // Apply discount
                if (promo.discountIDR)
                    total -= promo.discountIDR;
                else if (promo.discountPct) {
                    total -= Math.floor((promo.discountPct / 100) * total);
                }
            }
            let referrerId = null;
            let referredUserId = null;
            if (referralCode) {
                const referrer = yield prisma_1.default.user.findUnique({
                    where: { referralCode },
                });
                const referred = yield prisma_1.default.user.findUnique({
                    where: { email: userEmail },
                });
                if (referrer && referred) {
                    referrerId = referrer.id;
                    referredUserId = referred.id;
                    total -= Math.floor(0.1 * total); // Apply referral discount
                }
            }
            // --- STEP 2: Transaction ---
            const result = yield prisma_1.default.$transaction((tx) => __awaiter(this, void 0, void 0, function* () {
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
                yield tx.event.update({
                    where: { id: eventId },
                    data: {
                        availableSeats: { decrement: quantity },
                    },
                });
                if (promo) {
                    yield tx.promotion.update({
                        where: { code: promoCode },
                        data: { currentUsage: { increment: 1 } },
                    });
                }
                if (referrerId && referredUserId) {
                    yield tx.referralUsage.create({
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
            }));
            return result;
        });
    }
}
exports.TransactionService = TransactionService;
