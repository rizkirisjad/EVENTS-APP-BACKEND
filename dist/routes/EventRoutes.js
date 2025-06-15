"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRoutes = void 0;
const express_1 = require("express");
const EventController_1 = require("../controllers/EventController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
class EventRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.eventController = new EventController_1.EventController();
        this.routes();
    }
    routes() {
        // this.router.get("/", this.eventController.getEvents);
        this.router
            .route("/")
            .get(this.eventController.getEvents)
            .post(authMiddleware_1.authMiddleware, this.eventController.createEvent);
        // this.router.get("/:id", this.eventController.getEventById);
        this.router
            .route("/:id")
            .get(this.eventController.getEventById)
            .patch(authMiddleware_1.authMiddleware, this.eventController.updateEvent)
            .delete(authMiddleware_1.authMiddleware, this.eventController.deleteEvent);
    }
    getRouter() {
        return this.router;
    }
}
exports.EventRoutes = EventRoutes;
