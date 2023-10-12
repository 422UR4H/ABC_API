import { Router } from "express";
import { validateBody } from "@/middlewares/schema.middleware";
import { createUserSchema } from "@/schemas/user.schemas";
import { createUser } from "@/controllers/user.controller";

const userRouter = Router();

userRouter.post("/", validateBody(createUserSchema), createUser);

export { userRouter };
