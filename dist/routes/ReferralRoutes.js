"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralRoutes = void 0;
const express_1 = require("express");
const ReferralController_1 = require("../controllers/ReferralController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
class ReferralRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new ReferralController_1.ReferralController();
        this.routes();
    }
    routes() {
        // Validasi kode referral (tanpa login)
        this.router.get("/validate/:code", this.controller.validateReferral);
        // Memberikan poin referral (butuh login sebagai referrer)
        this.router.post("/give-points", authMiddleware_1.authMiddleware, this.controller.giveReferralPoints);
    }
    getRouter() {
        return this.router;
    }
}
exports.ReferralRoutes = ReferralRoutes;
