"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRoutes = void 0;
const express_1 = require("express");
const TransactionController_1 = require("src/controllers/TransactionController");
class EventRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.transactionController = new TransactionController_1.TransactionController();
        this.routes();
    }
    routes() {
        this.router.post("/", this.transactionController.createTransaction);
    }
    getRouter() {
        return this.router;
    }
}
exports.EventRoutes = EventRoutes;
