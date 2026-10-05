import { ArticleSectionsProps } from "@/content/blog/article";
import { Container } from "../../container/Container";
import styles from "./ArticleIndex.module.css";

export function ArticleIndex ({ 
  sections 
}: ArticleSectionsProps) {
  return(
    <div className={styles.articleIndex}>
    <Container>
      <h3 className={styles.title}>目次</h3>
        <ol className={styles.standardOl}>
          {sections.map((section, index) => (
            <li key={index} className={styles.standardOlItem}>
            <a href={`#${section.id}`}>{section.title}</a>
            </li>
          ))}
        </ol>
    </Container>
    </div>
  );
}