import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import styles from "./Carousel.module.css";

type ProductCardProps = {
    product: Product;
};

export function ProductCard({ product, }: ProductCardProps) {
    return (
        <article className={styles.card}>
        <Link href={product.href}>
        <div className={styles.image}>
          <Image
            src={product.image}
            alt={product.title}
            width={512}
            height={512}
            className={styles.imageElement}
          />
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>
            {product.title}
          </h3>

          <p className={styles.category}>
            {product.description}
          </p>

          <time
            className={styles.date}
            dateTime={product.publishedAt}
          >
            {product.publishedAt.replaceAll("-", ".")}
          </time>
        </div>
      </Link>
    </article>
    );
}