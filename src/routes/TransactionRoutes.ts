import { Router } from "express";
import { TransactionController } from "../controllers/TransactionController";

export class TransactionRoutes {
  private router: Router;
  private transactionController: TransactionController;

  constructor() {
    this.router = Router();
    this.transactionController = new TransactionController();
    this.routes();
  }

  private routes() {
    this.router.post("/", this.transactionController.createTransaction);
  }

  public getRouter() {
    return this.router;
  }
}
