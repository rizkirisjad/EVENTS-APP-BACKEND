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
exports.PromotionController = void 0;
const PromotionService_1 = require("../services/PromotionService");
class PromotionController {
    constructor() {
        this.createPromotion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const promo = yield this.promotionService.createPromotion(req.body);
                res.status(201).json(promo);
            }
            catch (err) {
                res.status(400).json({ error: err.message });
            }
        });
        this.validatePromotion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const promo = yield this.promotionService.validateCode(req.params.code);
                res.json(promo);
            }
            catch (err) {
                res.status(400).json({ error: err.message });
            }
        });
        this.promotionService = new PromotionService_1.PromotionService();
    }
}
exports.PromotionController = PromotionController;
