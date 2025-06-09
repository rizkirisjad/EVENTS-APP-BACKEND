"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRoutes = void 0;
// src/routes/EventRoutes.ts
const express_1 = require("express");
const EventController_1 = require("../controllers/EventController");
class EventRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.eventController = new EventController_1.EventController();
        this.routes();
    }
    routes() {
        this.router.get("/", this.eventController.getEvents);
        this.router.get("/:id", this.eventController.getEventById);
    }
    getRouter() {
        return this.router;
    }
}
exports.EventRoutes = EventRoutes;
