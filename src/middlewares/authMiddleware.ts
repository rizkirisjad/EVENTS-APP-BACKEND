import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = {
      id: (decoded as any).userId,
      role: (decoded as any).role,
      email: (decoded as any).email,
    };
    return next();
  } catch (err) {
    res.status(403).json({ error: "Invalid token" });
    return;
  }
};
