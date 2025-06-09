import { Request, Response } from "express";
import { EventService } from "../services/EventService";

export class EventController {
  private eventService: EventService;

  constructor() {
    this.eventService = new EventService();
  }

  getEvents = async (req: Request, res: Response): Promise<void> => {
    try {
      const { q, category, location, page, limit } = req.query;

      const events = await this.eventService.getEvents({
        q: q as string,
        category: category as string,
        location: location as string,
        page: parseInt(page as string) || 1,
        limit: parseInt(limit as string) || 10,
      });

      res.status(200).json(events);
    } catch (err) {
      console.error("Error in getEvents:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  getEventById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;

      const event = await this.eventService.getEventById(id);

      res.status(200).json(event);
    } catch (err: any) {
      console.error("Error in getEventById:", err);
      if (err.name === "NotFoundError") {
        res.status(404).json({ message: err.message });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  };
}
