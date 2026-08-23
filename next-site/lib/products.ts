import { products } from "@/content/product/products";
import type { Product } from "@/types/product";

export function getLatestProducts(
  limit = 3
): Product[] {
  return [...products]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}