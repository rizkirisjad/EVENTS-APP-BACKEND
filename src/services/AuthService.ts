import { compare, genSalt, hash } from "bcrypt";
import prisma from "../utils/prisma";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

export class AuthService {
  async register({
    email,
    password,
    name,
    referredBy,
  }: {
    email: string;
    password: string;
    name: string;
    referredBy?: string;
  }) {
    const salt = await genSalt(10);
    const hashed = await hash(password, salt);
    const referralCode = uuidv4().slice(0, 8);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
        name,
        referralCode,
        referredBy,
      },
    });

    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET!
    );
    return { token, user };
  }

  async login({ email, password }: { email: string; password: string }) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await compare(password, user.password))) {
      throw new Error("Invalid credentials");
    }
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET!
    );
    return { token, user };
  }
}
