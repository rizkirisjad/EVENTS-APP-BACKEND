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
exports.EventService = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
class EventService {
    getEvents(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { q, category, location, page = 1, limit = 10 } = params;
            const where = {
                date: { gte: new Date() },
            };
            if (q) {
                where.OR = [
                    { title: { contains: q, mode: "insensitive" } },
                    { description: { contains: q, mode: "insensitive" } },
                ];
            }
            if (category)
                where.category = category;
            if (location)
                where.location = { contains: location, mode: "insensitive" };
            const [events, total] = yield Promise.all([
                prisma_1.default.event.findMany({
                    where,
                    skip: (page - 1) * limit,
                    take: limit,
                    orderBy: { date: "asc" },
                    include: { ticketTypes: true },
                }),
                prisma_1.default.event.count({ where }),
            ]);
            return {
                data: events,
                page,
                total,
                totalPages: Math.ceil(total / limit),
                hasMore: page * limit < total,
            };
        });
    }
    getEventById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const event = yield prisma_1.default.event.findUnique({
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
        });
    }
    createEvent(userId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.event.create({
                data: Object.assign(Object.assign({}, data), { organizerId: userId }),
            });
        });
    }
    updateEvent(id, userId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const event = yield prisma_1.default.event.findUnique({ where: { id: id } });
            if ((event === null || event === void 0 ? void 0 : event.organizerId) !== userId)
                throw new Error("Unauthorized");
            return prisma_1.default.event.update({
                where: { id: id },
                data,
            });
        });
    }
    deleteEvent(id, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const event = yield prisma_1.default.event.findUnique({ where: { id: id } });
            if ((event === null || event === void 0 ? void 0 : event.organizerId) !== userId)
                throw new Error("Unauthorized");
            return prisma_1.default.event.delete({ where: { id: id } });
        });
    }
}
exports.EventService = EventService;
