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
exports.ReferralController = void 0;
const ReferralService_1 = require("../services/ReferralService");
class ReferralController {
    constructor() {
        this.validateReferral = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.referralService.validateReferralCode(req.params.code);
                res.json(user);
            }
            catch (err) {
                res.status(400).json({ error: err.message });
            }
        });
        this.giveReferralPoints = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { referrerId } = req.body;
                const point = yield this.referralService.givePoints(referrerId);
                res.status(201).json(point);
            }
            catch (err) {
                res.status(400).json({ error: err.message });
            }
        });
        this.referralService = new ReferralService_1.ReferralService();
    }
}
exports.ReferralController = ReferralController;
