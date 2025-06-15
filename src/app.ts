import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import { EventRoutes } from "./routes/EventRoutes";
import { TransactionRoutes } from "./routes/TransactionRoutes";
import { AuthRoutes } from "./routes/AuthRoutes";
import { UserRoutes } from "./routes/UserRoutes";
import { PromotionRoutes } from "./routes/PromotionRoutes";
import { ReferralRoutes } from "./routes/ReferralRoutes";

const PORT: string | number = process.env.PORT || 8000;

const app: Application = express();
const eventRoutes = new EventRoutes();
const transactionRoutes = new TransactionRoutes();
const authRoutes = new AuthRoutes();
const userRoutes = new UserRoutes();
const promotionRoutes = new PromotionRoutes();
const referralRoutes = new ReferralRoutes();

app.use(express.json());
app.use(cors());
app.use(helmet()); // helmet is a security middleware that helps protect your app from common vulnerabilities by setting various HTTP headers.
app.use(morgan("dev")); // morgan is a HTTP request logger middleware for node.js

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send({ message: "Event Management API is running" });
});

app.use("/api/v1/events", eventRoutes.getRouter());
app.use("/api/v1/transactions", transactionRoutes.getRouter());
app.use("/api/v1/auth", authRoutes.getRouter());
app.use("/api/v1/users", userRoutes.getRouter());
app.use("/api/v1/promotions", promotionRoutes.getRouter());
app.use("/api/v1/referrals", referralRoutes.getRouter());

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
