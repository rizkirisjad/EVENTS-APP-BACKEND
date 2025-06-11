import { Request, Response } from "express";
import { TransactionService } from "../services/TransactionService";

export class TransactionController {
  private service = new TransactionService();

  createTransaction = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await this.service.createTransaction(req.body);
      res.status(201).json({
        message: "Transaction success",
        ...result,
      });
    } catch (err: any) {
      console.error("Transaction error:", err);
      res.status(400).json({ message: err.message });
    }
  };
}
