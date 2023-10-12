import { NextFunction, Request, Response } from "express";
import { notFound } from "@/errors/customErrors";
import jwt from "jsonwebtoken";

export async function validateAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.header("Authorization");
  if (!authHeader) throw notFound();

  const token = authHeader.split(" ")[1];
  if (!token) throw notFound();

  const { userId } = jwt.verify(
    token,
    process.env.JWT_SECRET || "development"
  ) as JWTPayload;

  res.locals.user = userId;
  return next();
}

type JWTPayload = {
  userId: number;
};
