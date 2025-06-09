import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import { EventRoutes } from "./routes/EventRoutes";

const PORT: string | number = process.env.PORT || 8000;

const app: Application = express();
const eventRoutes = new EventRoutes();

app.use(express.json());
app.use(cors());
app.use(helmet()); // helmet is a security middleware that helps protect your app from common vulnerabilities by setting various HTTP headers.
app.use(morgan("dev")); // morgan is a HTTP request logger middleware for node.js

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send({ message: "Event Management API is running" });
});

app.use("/api/v1/events", eventRoutes.getRouter());

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
