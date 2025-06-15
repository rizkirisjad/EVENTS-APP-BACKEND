"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionRoutes = void 0;
const express_1 = require("express");
const PromotionController_1 = require("../controllers/PromotionController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
class PromotionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new PromotionController_1.PromotionController();
        this.routes();
    }
    routes() {
        // Membuat promo (perlu auth)
        this.router.post("/", authMiddleware_1.authMiddleware, this.controller.createPromotion);
        // Validasi promo berdasarkan kode (tanpa login)
        this.router.get("/validate/:code", this.controller.validatePromotion);
    }
    getRouter() {
        return this.router;
    }
}
exports.PromotionRoutes = PromotionRoutes;
