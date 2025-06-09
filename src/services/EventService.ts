import { Prisma } from "../generated/prisma";
import prisma from "../utils/prisma";

interface GetEventsParams {
  q?: string;
  category?: string;
  location?: string;
  page?: number;
  limit?: number;
}

export class EventService {
  async getEvents(params: GetEventsParams) {
    const { q, category, location, page = 1, limit = 10 } = params;

    const where: Prisma.EventWhereInput = {
      date: { gte: new Date() },
    };

    if (q) {
      where.OR = [
        { title: { contains: q, mode: "insensitive" } },
        { description: { contains: q, mode: "insensitive" } },
      ];
    }

    if (category) where.category = category;
    if (location) where.location = { contains: location, mode: "insensitive" };

    const [events, total] = await Promise.all([
      prisma.event.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { date: "asc" },
        include: { ticketTypes: true },
      }),
      prisma.event.count({ where }),
    ]);

    return {
      data: events,
      page,
      total,
      totalPages: Math.ceil(total / limit),
      hasMore: page * limit < total,
    };
  }

  async getEventById(id: string) {
    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        ticketTypes: true,
      },
    });

    if (!event) {
      const error = new Error("Event not found");
      error.name = "NotFoundError";
      throw error;
    }

    return event;
  }
}
