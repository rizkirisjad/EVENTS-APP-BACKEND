import { Router } from "express";
import { ReferralController } from "../controllers/ReferralController";
import { authMiddleware } from "../middlewares/authMiddleware";

export class ReferralRoutes {
  private router: Router;
  private controller: ReferralController;

  constructor() {
    this.router = Router();
    this.controller = new ReferralController();
    this.routes();
  }

  private routes() {
    // Validasi kode referral (tanpa login)
    this.router.get("/validate/:code", this.controller.validateReferral);

    // Memberikan poin referral (butuh login sebagai referrer)
    this.router.post(
      "/give-points",
      authMiddleware,
      this.controller.giveReferralPoints
    );
  }

  public getRouter() {
    return this.router;
  }
}
