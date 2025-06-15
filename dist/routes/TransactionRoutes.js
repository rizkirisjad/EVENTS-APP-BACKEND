"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRoutes = void 0;
const express_1 = require("express");
const TransactionController_1 = require("../controllers/TransactionController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
class TransactionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.transactionController = new TransactionController_1.TransactionController();
        this.routes();
    }
    routes() {
        this.router.post("/", authMiddleware_1.authMiddleware, this.transactionController.createTransaction);
    }
    getRouter() {
        return this.router;
    }
}
exports.TransactionRoutes = TransactionRoutes;
