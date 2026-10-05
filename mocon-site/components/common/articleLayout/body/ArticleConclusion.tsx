import Image from "next/image";
import { ArticleSectionProps } from "@/content/blog/article";
import styles from "./ArticleConclusion.module.css";
import light from "@/public/images/article/light-bulb.svg";

export function ArticleConclusion ({
  id,
  title,
  type,
  content,
}: ArticleSectionProps) {
  return(
    <section className={styles.conclusion} id={id}>
      <Image 
        className={styles.circleIcon}
        src={light}
        alt="まとめ欄のアイコン"
      />
      <div>
      <div className={styles.title}>{title}</div>
      {content.map((item, index) => (
        <div key={index}>{item.text}</div>
      ))}
      </div>
    </section>
  );
}