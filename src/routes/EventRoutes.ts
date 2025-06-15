import { Router } from "express";
import { EventController } from "../controllers/EventController";
import { authMiddleware } from "../middlewares/authMiddleware";

export class EventRoutes {
  private router: Router;
  private eventController: EventController;

  constructor() {
    this.router = Router();
    this.eventController = new EventController();
    this.routes();
  }

  private routes() {
    // this.router.get("/", this.eventController.getEvents);
    this.router
      .route("/")
      .get(this.eventController.getEvents)
      .post(authMiddleware, this.eventController.createEvent);

    // this.router.get("/:id", this.eventController.getEventById);
    this.router
      .route("/:id")
      .get(this.eventController.getEventById)
      .patch(authMiddleware, this.eventController.updateEvent)
      .delete(authMiddleware, this.eventController.deleteEvent);
  }

  public getRouter() {
    return this.router;
  }
}
