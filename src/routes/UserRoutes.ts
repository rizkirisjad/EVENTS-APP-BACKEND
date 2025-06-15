import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { authMiddleware } from "../middlewares/authMiddleware";

export class UserRoutes {
  private router: Router;
  private userController: UserController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/me", authMiddleware, this.userController.getProfile);
    this.router.post(
      "/redeem",
      authMiddleware,
      this.userController.redeemPoints
    );
  }

  public getRouter() {
    return this.router;
  }
}
