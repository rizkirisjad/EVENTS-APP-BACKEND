import { Router } from "express";
import { TransactionController } from "../controllers/TransactionController";
import { authMiddleware } from "../middlewares/authMiddleware";

export class TransactionRoutes {
  private router: Router;
  private transactionController: TransactionController;

  constructor() {
    this.router = Router();
    this.transactionController = new TransactionController();
    this.routes();
  }

  private routes() {
    this.router.post(
      "/",
      authMiddleware,
      this.transactionController.createTransaction
    );
  }

  public getRouter() {
    return this.router;
  }
}
