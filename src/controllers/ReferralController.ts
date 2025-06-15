import { Request, Response } from "express";
import { ReferralService } from "../services/ReferralService";

export class ReferralController {
  private referralService: ReferralService;
  constructor() {
    this.referralService = new ReferralService();
  }

  validateReferral = async (req: Request, res: Response) => {
    try {
      const user = await this.referralService.validateReferralCode(
        req.params.code
      );
      res.json(user);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  giveReferralPoints = async (req: Request, res: Response) => {
    try {
      const { referrerId } = req.body;
      const point = await this.referralService.givePoints(referrerId);
      res.status(201).json(point);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };
}
