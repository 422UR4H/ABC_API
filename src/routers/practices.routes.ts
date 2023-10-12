import { Router } from "express";
import {
    createPractices,
    getPractices,
    updatePractice,
    deletePractice,
    upsertPracticeAdvantage,
} from "@/controllers/practices.controller";
import { validateBody, validateParams } from "@/middlewares/schema.middleware";
import {
    practiceAdvantageBody,
    practiceBody,
    practiceParams,
} from "@/schemas/practices.schemas";

const practiceRouter = Router();

practiceRouter
    .post("/", validateBody(practiceBody), createPractices)
    .post(
        "/advantage/:practiceId",
        validateParams(practiceParams),
        validateBody(practiceAdvantageBody),
        upsertPracticeAdvantage
    )
    .get("/", getPractices)
    .put(
        "/:practiceId",
        validateBody(practiceBody),
        validateParams(practiceParams),
        updatePractice
    )
    .delete("/:practiceId", validateParams(practiceParams), deletePractice);

export default practiceRouter;