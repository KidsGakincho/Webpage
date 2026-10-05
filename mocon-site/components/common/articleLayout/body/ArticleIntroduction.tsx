import { ArticleSectionProps } from "@/content/blog/article";
import styles from "./ArticleIntroduction.module.css";

export function ArticleIntroduction ({
  id,
  title,
  content
}: ArticleSectionProps) {
  return(
    <section id={id}>
      <div className={styles.title}>{title}</div>
      {content.map((item, index) => (
        <div key={index} className={styles.text}>{item.text}</div>
      ))}
    </section>
  );
}