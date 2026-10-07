import styles from "./ArticleHeader.module.css";
import { Breadcrumb } from "./Breadcrumb";
import { ArticleHero } from "./ArticleHero";
import { Article } from "@/content/blog/article";
import { BreadcrumbProps } from "@/content/blog/breadcrumb";
import { Container } from "../../container/Container";

type ArticleHeaderProps = {
  breadcrumb: BreadcrumbProps["items"];
  article: Article[number];
};

export function ArticleHeader ({
  breadcrumb,
  article,
}: ArticleHeaderProps) {
  return(
    <header className={styles.articleHeader}>
      <Container className={styles.container}>
        <Breadcrumb items={breadcrumb} />
        <ArticleHero {...article} />
      </Container>
    </header>
  );
}