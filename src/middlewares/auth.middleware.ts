import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";

export async function validateAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const authHeader = req.header("Authorization");
  // if (!authHeader) throw unauthorizedError();

  const token = authHeader.split(" ")[1];
  // if (!token) throw unauthorizedError();

  const { userId } = jwt.verify(token, process.env.JWT_SECRET);

  res.locals.user = userId;
  return next();
}

type JWTPayload = {
  userId: number;
};
