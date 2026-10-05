import { ArticleNormalSectionProps } from "@/content/blog/article";
import styles from "./ArticleNormalSection.module.css";

export function ArticleNormalSection ({
  id,
  title,
  type,
  content,
  index,
}: ArticleNormalSectionProps) {
  return(
    <section className={styles.paragraph} id={id}>
      {/* number */}
      <div className={styles.numberWrapper}>
        <div className={styles.number}>{index}</div>
      </div>
      
      {/* content */}
      <div className={styles.contentWrapper}>
        <div className={styles.title}>{title}</div>
        {content.map( (item, index) => (
          <div key={index} className={styles.text}>{item.text}</div>
        ))}
        </div>
    </section>
  );
}