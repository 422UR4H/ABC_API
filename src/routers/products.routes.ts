import { Router } from "express";
import {
  createProduct,
  getProduct,
  getProductByIdAndPractice,
  updateProduct,
  deleteProduct,
} from "@/controllers/products.controller";
import { validateBody, validateParams } from "@/middlewares/schema.middleware";
import { productBody, productParams } from "@/schemas/products.schemas";

export const productsRouter = Router();

productsRouter
  .post("/", validateBody(productBody), createProduct)
  .get("/", getProduct)
  .get("/:productId", validateParams(productParams), getProductByIdAndPractice)
  .put(
    "/:productId",
    validateBody(productBody),
    validateParams(productParams),
    updateProduct
  )
  .delete("/:productId", validateParams(productParams), deleteProduct);
