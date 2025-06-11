import { Router } from "express";
import { TransactionController } from "src/controllers/TransactionController";

export class EventRoutes {
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
