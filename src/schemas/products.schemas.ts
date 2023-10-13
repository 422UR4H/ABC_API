import Joi from "joi";
import { ProductCreateInput, ProductParams } from "@/protocols/products.protocols";

export const productBody = Joi.object<ProductCreateInput>({
  name: Joi.string().required(),
});

export const productParams = Joi.object<ProductParams>({
  productId: Joi.number().required(),
});