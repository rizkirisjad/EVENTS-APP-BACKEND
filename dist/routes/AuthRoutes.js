"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const AuthController_1 = require("../controllers/AuthController");
class AuthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.authController = new AuthController_1.AuthController();
        this.routes();
    }
    routes() {
        this.router.post("/register", this.authController.register);
        this.router.post("/login", this.authController.login);
    }
    getRouter() {
        return this.router;
    }
}
exports.AuthRoutes = AuthRoutes;
