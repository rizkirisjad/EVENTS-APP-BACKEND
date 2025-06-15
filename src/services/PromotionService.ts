import prisma from "../utils/prisma";

export class PromotionService {
  async createPromotion(data: {
    eventId: string;
    code: string;
    type: "REFERRAL" | "TIME_BASED";
    discountIDR?: number;
    discountPct?: number;
    maxUsage?: number;
    expiresAt: Date;
  }) {
    return prisma.promotion.create({ data });
  }

  async validateCode(code: string) {
    const promo = await prisma.promotion.findUnique({ where: { code } });
    if (!promo) throw new Error("Promo not found");
    if (promo.expiresAt < new Date()) throw new Error("Promo expired");
    if (promo.maxUsage && promo.currentUsage >= promo.maxUsage)
      throw new Error("Max usage reached");
    return promo;
  }
}
