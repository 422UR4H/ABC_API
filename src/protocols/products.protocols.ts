import { Product } from "@prisma/client";
import { SystemInfo } from "./auth.protocols";

export type ProductParams = {
    productId: string | number;
};
export type ProductCreateInput = Omit<Product, "id" | SystemInfo>;
export type ProductUpdateInput = Omit<Product, SystemInfo>;
