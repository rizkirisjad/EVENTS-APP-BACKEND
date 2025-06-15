import prisma from "../utils/prisma";

export class ReferralService {
  async validateReferralCode(code: string) {
    const user = await prisma.user.findUnique({
      where: { referralCode: code },
    });
    if (!user) throw new Error("Invalid referral code");
    return user;
  }

  async givePoints(referrerId: string) {
    return prisma.point.create({
      data: {
        userId: referrerId,
        amount: 10_000,
        expiresAt: new Date(new Date().setMonth(new Date().getMonth() + 3)),
      },
    });
  }
}
