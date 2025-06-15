"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
class UserController {
    constructor() {
        this.getProfile = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.user.id;
                const profile = yield this.userService.getCurrentUser(userId);
                res.json(profile);
            }
            catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
        this.redeemPoints = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.user.id;
                const { amount } = req.body;
                const result = yield this.userService.redeemPoints(userId, amount);
                res.json(result);
            }
            catch (err) {
                res.status(400).json({ error: err.message });
            }
        });
        this.userService = new UserService_1.UserService();
    }
}
exports.UserController = UserController;
