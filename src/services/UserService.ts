import prisma from "../utils/prisma";

export class UserService {
  async getCurrentUser(userId: string) {
    return prisma.user.findUnique({
      where: { id: userId },
      include: { points: true },
    });
  }

  async redeemPoints(userId: string, amount: number) {
    const points = await prisma.point.findMany({
      where: {
        userId,
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: "asc" },
    });

    let totalUsed = 0;
    for (const point of points) {
      if (totalUsed >= amount) break;
      const usable = Math.min(amount - totalUsed, point.amount);
      await prisma.point.update({
        where: { id: point.id },
        data: { amount: point.amount - usable },
      });
      totalUsed += usable;
    }

    return { totalUsed };
  }
}
