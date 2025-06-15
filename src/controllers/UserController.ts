import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  getProfile = async (req: Request, res: Response) => {
    try {
      const userId = req.user.id;
      const profile = await this.userService.getCurrentUser(userId);
      res.json(profile);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  };

  redeemPoints = async (req: Request, res: Response) => {
    try {
      const userId = req.user.id;
      const { amount } = req.body;
      const result = await this.userService.redeemPoints(userId, amount);
      res.json(result);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };
}
