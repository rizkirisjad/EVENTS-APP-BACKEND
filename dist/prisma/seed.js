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
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../src/generated/prisma");
const prisma = new prisma_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🌱 Start seeding...");
        // Seed 3 sample events
        const events = yield Promise.all([
            prisma.event.create({
                data: {
                    title: "Jakarta Tech Expo 2025",
                    description: "Tech showcase with speakers and exhibitors.",
                    date: new Date("2025-07-10"),
                    time: "10:00",
                    location: "Jakarta Convention Center",
                    category: "Technology",
                    imageUrl: "https://source.unsplash.com/random/400x300?tech",
                    price: 0,
                    isFree: true,
                    availableSeats: 200,
                    organizerId: "org-001",
                },
            }),
            prisma.event.create({
                data: {
                    title: "Live Music Festival",
                    description: "Outdoor music event with local bands and food trucks.",
                    date: new Date("2025-08-20"),
                    time: "16:00",
                    location: "Senayan, Jakarta",
                    category: "Music",
                    imageUrl: "https://source.unsplash.com/random/400x300?concert",
                    price: 150000,
                    isFree: false,
                    availableSeats: 500,
                    organizerId: "org-002",
                },
            }),
            prisma.event.create({
                data: {
                    title: "Startup Pitch Day",
                    description: "Startups pitching to potential investors.",
                    date: new Date("2025-09-15"),
                    time: "13:00",
                    location: "Bandung Creative Hub",
                    category: "Business",
                    imageUrl: "https://source.unsplash.com/random/400x300?startup",
                    price: 100000,
                    isFree: false,
                    availableSeats: 100,
                    organizerId: "org-003",
                },
            }),
        ]);
        // Add ticket types to paid events
        const paidEvents = events.filter((e) => !e.isFree);
        for (const event of paidEvents) {
            yield prisma.ticketType.createMany({
                data: [
                    {
                        name: "Regular",
                        price: event.price,
                        eventId: event.id,
                    },
                    {
                        name: "VIP",
                        price: event.price + 50000,
                        eventId: event.id,
                    },
                ],
            });
        }
        // Add sample promotions (referral and time-based)
        yield prisma.promotion.createMany({
            data: [
                {
                    eventId: events[1].id, // Live Music Festival
                    code: "MUSIC10",
                    type: prisma_1.PromotionType.TIME_BASED,
                    discountPct: 10,
                    expiresAt: new Date("2025-08-15"),
                    maxUsage: 100,
                },
                {
                    eventId: events[2].id, // Startup Pitch Day
                    code: "REFERRAL20",
                    type: prisma_1.PromotionType.REFERRAL,
                    discountIDR: 20000,
                    expiresAt: new Date("2025-09-01"),
                    maxUsage: 50,
                },
            ],
        });
        console.log("✅ Seeding finished!");
    });
}
main()
    .catch((e) => {
    console.error("❌ Error seeding data:", e);
    process.exit(1);
})
    .finally(() => {
    prisma.$disconnect();
});
