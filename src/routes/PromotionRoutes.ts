import { Router } from "express";
import { PromotionController } from "../controllers/PromotionController";
import { authMiddleware } from "../middlewares/authMiddleware";

export class PromotionRoutes {
  private router: Router;
  private controller: PromotionController;

  constructor() {
    this.router = Router();
    this.controller = new PromotionController();
    this.routes();
  }

  private routes() {
    // Membuat promo (perlu auth)
    this.router.post("/", authMiddleware, this.controller.createPromotion);

    // Validasi promo berdasarkan kode (tanpa login)
    this.router.get("/validate/:code", this.controller.validatePromotion);
  }

  public getRouter() {
    return this.router;
  }
}
