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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = require("bcrypt");
const prisma_1 = __importDefault(require("../utils/prisma"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uuid_1 = require("uuid");
class AuthService {
    register(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password, name, referredBy, }) {
            const salt = yield (0, bcrypt_1.genSalt)(10);
            const hashed = yield (0, bcrypt_1.hash)(password, salt);
            const referralCode = (0, uuid_1.v4)().slice(0, 8);
            const user = yield prisma_1.default.user.create({
                data: {
                    email,
                    password: hashed,
                    name,
                    referralCode,
                    referredBy,
                },
            });
            const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET);
            return { token, user };
        });
    }
    login(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password }) {
            const user = yield prisma_1.default.user.findUnique({ where: { email } });
            if (!user || !(yield (0, bcrypt_1.compare)(password, user.password))) {
                throw new Error("Invalid credentials");
            }
            const token = jsonwebtoken_1.default.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET);
            return { token, user };
        });
    }
}
exports.AuthService = AuthService;
