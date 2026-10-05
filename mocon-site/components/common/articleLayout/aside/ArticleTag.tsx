import { ArticleTagProps } from "@/content/blog/article";
import { Container } from "../../container/Container";
import styles from "./ArticleTag.module.css";

export function ArticleTag ({
  tags
} : ArticleTagProps){
  return(
    <div className={styles.articleTag}>
      <Container className={styles.container}>
        <h3 className={styles.caption}>タグ</h3>
        <div className={styles.body}>
          {tags.map((tag, index) => (
            <div key={index} className={styles.tags}>{tag}</div>
          ))}
        </div>
      </Container>
    </div>
  );
}