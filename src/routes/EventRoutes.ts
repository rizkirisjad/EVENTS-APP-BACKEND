// src/routes/EventRoutes.ts
import { Router } from "express";
import { EventController } from "../controllers/EventController";

export class EventRoutes {
  private router: Router;
  private eventController: EventController;

  constructor() {
    this.router = Router();
    this.eventController = new EventController();
    this.routes();
  }

  private routes() {
    this.router.get("/", this.eventController.getEvents);
    this.router.get("/:id", this.eventController.getEventById);
  }

  public getRouter() {
    return this.router;
  }
}
