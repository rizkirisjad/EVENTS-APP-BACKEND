"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.userController = new UserController_1.UserController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/me", authMiddleware_1.authMiddleware, this.userController.getProfile);
        this.router.post("/redeem", authMiddleware_1.authMiddleware, this.userController.redeemPoints);
    }
    getRouter() {
        return this.router;
    }
}
exports.UserRoutes = UserRoutes;
