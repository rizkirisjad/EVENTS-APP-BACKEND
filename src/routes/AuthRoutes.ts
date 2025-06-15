import { Router } from "express";
import { AuthController } from "../controllers/AuthController";

export class AuthRoutes {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.router = Router();
    this.authController = new AuthController();
    this.routes();
  }

  private routes() {
    this.router.post("/register", this.authController.register);
    this.router.post("/login", this.authController.login);
  }

  public getRouter() {
    return this.router;
  }
}
