import { ArticleSectionsProps } from "@/content/blog/article";
import styles from "./ArticleSection.module.css";
import { ArticleIntroduction } from "./ArticleIntroduction";
import { ArticleNormalSection } from "./ArticleNormalSection";
import { ArticleConclusion } from "./ArticleConclusion";
import { Container } from "../../container/Container";

export function ArticleSection ({
  sections,
} : ArticleSectionsProps) {
  return(
    <div className={styles.articleSection}>
    <Container className={styles.container}>
      {sections.map((section, index) => {
        switch (section.type) {
          case "introduction":
            return <ArticleIntroduction {...section} />;
        
          case "section":
            return <ArticleNormalSection {...section} index={index} />;
        
          case "conclusion":
            return <ArticleConclusion {...section} />;

          default:
            return null;
          }
      })}
    </Container>
    </div>
  );
}