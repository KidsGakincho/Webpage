//import Link from "next/link";
import { getLatestProducts } from "@/lib/products";
import { ProductCard } from "../../ui/Card";
import styles from "./LatestProducts.module.css";
import { ProductCarousel } from "../../ui/Carousel";
import { SectionTitle } from "@/components/common/SectionTitle";

export function LatestProducts() {
  const products = getLatestProducts(4);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <SectionTitle
            label="PRODUCTS"
            title="最新の制作実績"
        />

        <ProductCarousel>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </ProductCarousel>
        
      </div>
    </section>
  );
}