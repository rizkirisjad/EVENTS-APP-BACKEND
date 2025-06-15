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
exports.UserService = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
class UserService {
    getCurrentUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.user.findUnique({
                where: { id: userId },
                include: { points: true },
            });
        });
    }
    redeemPoints(userId, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const points = yield prisma_1.default.point.findMany({
                where: {
                    userId,
                    expiresAt: { gt: new Date() },
                },
                orderBy: { createdAt: "asc" },
            });
            let totalUsed = 0;
            for (const point of points) {
                if (totalUsed >= amount)
                    break;
                const usable = Math.min(amount - totalUsed, point.amount);
                yield prisma_1.default.point.update({
                    where: { id: point.id },
                    data: { amount: point.amount - usable },
                });
                totalUsed += usable;
            }
            return { totalUsed };
        });
    }
}
exports.UserService = UserService;
