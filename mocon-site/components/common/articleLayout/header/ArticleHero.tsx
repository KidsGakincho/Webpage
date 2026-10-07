import Image from "next/image";
import styles from "./ArticleHero.module.css";
import { Article } from "@/content/blog/article";

export function ArticleHero ({
  title,
  day,
  description,
  category,
  resource,
}: Article[number]) {
  return(
    <section className={styles.articleHero}>
      <div className={styles.hero}>
        <div>
          <div className={styles.category}>{category}</div>
          <div className={styles.day}>{day}</div>
          <div className={styles.title}>{title}</div>
          <div>{description}</div>
        </div>
    
        <div className={styles.image}>
          <Image 
            className={styles.largeImage}
            src={resource.src}
            alt={resource.alt}
            fill
          />
        </div>
      </div>
    </section>
  );
}