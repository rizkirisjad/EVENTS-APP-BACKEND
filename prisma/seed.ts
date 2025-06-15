import { PrismaClient, PromotionType } from "./generated/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Start seeding...");

  // --- 1. Seed 3 sample events awal ---
  const events = await Promise.all([
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

  // --- 2. Tambahkan 6 mockEvents tambahan ---
  const mockEvents = [
    {
      title: "Summer Music Festival",
      description: "Join us for the biggest music festival of the year!",
      date: new Date("2024-07-15"),
      time: "14:00",
      location: "Jakarta",
      category: "Music",
      imageUrl: "https://source.unsplash.com/random/400x300?summer,music",
      price: 500000,
      isFree: false,
      availableSeats: 1000,
      organizerId: "org-004",
    },
    {
      title: "Tech Conference 2024",
      description:
        "Annual technology conference featuring the latest innovations",
      date: new Date("2024-08-20"),
      time: "09:00",
      location: "Bandung",
      category: "Technology",
      imageUrl: "https://source.unsplash.com/random/400x300?conference,tech",
      price: 750000,
      isFree: false,
      availableSeats: 500,
      organizerId: "org-005",
    },
    {
      title: "Food & Wine Festival",
      description:
        "Experience the finest cuisines and wines from around Indonesia",
      date: new Date("2024-09-10"),
      time: "11:00",
      location: "Bali",
      category: "Food & Drink",
      imageUrl: "https://source.unsplash.com/random/400x300?food,wine",
      price: 350000,
      isFree: false,
      availableSeats: 300,
      organizerId: "org-006",
    },
    {
      title: "Business Networking Event",
      description: "Connect with industry leaders and expand your network",
      date: new Date("2024-10-05"),
      time: "18:00",
      location: "Jakarta",
      category: "Business",
      imageUrl:
        "https://source.unsplash.com/random/400x300?business,networking",
      price: 250000,
      isFree: false,
      availableSeats: 200,
      organizerId: "org-007",
    },
    {
      title: "Art Exhibition",
      description: "Contemporary art exhibition featuring local artists",
      date: new Date("2024-11-15"),
      time: "10:00",
      location: "Yogyakarta",
      category: "Arts & Theater",
      imageUrl: "https://source.unsplash.com/random/400x300?art,exhibition",
      price: 150000,
      isFree: false,
      availableSeats: 150,
      organizerId: "org-008",
    },
    {
      title: "Sports Tournament",
      description: "Annual sports tournament with multiple categories",
      date: new Date("2024-12-01"),
      time: "08:00",
      location: "Surabaya",
      category: "Sports",
      imageUrl: "https://source.unsplash.com/random/400x300?sports,tournament",
      price: 200000,
      isFree: false,
      availableSeats: 400,
      organizerId: "org-009",
    },
  ];

  const mockEventRecords = await Promise.all(
    mockEvents.map((event) =>
      prisma.event.create({
        data: {
          ...event,
          isFree: event.price === 0,
        },
      })
    )
  );

  const allEvents = [...events, ...mockEventRecords];

  // --- 3. Tambahkan ticket type ke semua event berbayar ---
  const paidEvents = allEvents.filter((e) => !e.isFree);
  for (const event of paidEvents) {
    await prisma.ticketType.createMany({
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

  // --- 4. Tambahkan sample promotion ke dua event ---
  await Promise.all([
    prisma.promotion.upsert({
      where: { code: "MUSIC10" },
      update: {},
      create: {
        eventId: events[1].id,
        code: "MUSIC10",
        type: PromotionType.TIME_BASED,
        discountPct: 10,
        expiresAt: new Date("2025-08-15"),
        maxUsage: 100,
      },
    }),
    prisma.promotion.upsert({
      where: { code: "REFERRAL20" },
      update: {},
      create: {
        eventId: events[2].id,
        code: "REFERRAL20",
        type: PromotionType.REFERRAL,
        discountIDR: 20000,
        expiresAt: new Date("2025-09-01"),
        maxUsage: 50,
      },
    }),
  ]);

  console.log("✅ Seeding finished!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding data:", e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
