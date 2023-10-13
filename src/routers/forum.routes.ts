import { Router } from "express";
import { validateParams } from "@/middlewares/schema.middleware";

const forumRouter = Router();

forumRouter
  .get("/", validateParams(ForumP), getForum)

export default forumRouter;