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
exports.EventController = void 0;
const EventService_1 = require("../services/EventService");
class EventController {
    constructor() {
        this.getEvents = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { q, category, location, page, limit } = req.query;
                const events = yield this.eventService.getEvents({
                    q: q,
                    category: category,
                    location: location,
                    page: parseInt(page) || 1,
                    limit: parseInt(limit) || 10,
                });
                res.status(200).json(events);
            }
            catch (err) {
                console.error("Error in getEvents:", err);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        this.getEventById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const event = yield this.eventService.getEventById(id);
                res.status(200).json(event);
            }
            catch (err) {
                console.error("Error in getEventById:", err);
                if (err.name === "NotFoundError") {
                    res.status(404).json({ message: err.message });
                }
                else {
                    res.status(500).json({ message: "Internal server error" });
                }
            }
        });
        this.eventService = new EventService_1.EventService();
    }
}
exports.EventController = EventController;
