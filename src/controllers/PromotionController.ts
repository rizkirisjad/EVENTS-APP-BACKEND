import { Request, Response } from "express";
import { PromotionService } from "../services/PromotionService";

export class PromotionController {
  private promotionService: PromotionService;

  constructor() {
    this.promotionService = new PromotionService();
  }

  createPromotion = async (req: Request, res: Response) => {
    try {
      const promo = await this.promotionService.createPromotion(req.body);
      res.status(201).json(promo);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  validatePromotion = async (req: Request, res: Response) => {
    try {
      const promo = await this.promotionService.validateCode(req.params.code);
      res.json(promo);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };
}
