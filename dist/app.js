"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const EventRoutes_1 = require("./routes/EventRoutes");
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
const eventRoutes = new EventRoutes_1.EventRoutes();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)()); // helmet is a security middleware that helps protect your app from common vulnerabilities by setting various HTTP headers.
app.use((0, morgan_1.default)("dev")); // morgan is a HTTP request logger middleware for node.js
app.get("/api", (req, res) => {
    res.status(200).send({ message: "Event Management API is running" });
});
app.use("/api/v1/events", eventRoutes.getRouter());
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
