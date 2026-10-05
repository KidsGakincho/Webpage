import { ArticleProps } from "@/content/blog/article";
import { ArticleSection } from "./ArticleSection";
import { Container } from "../../container/Container";
import { ArticleHeader } from "../header/ArticleHeader";
import { ArticleAside } from "../aside/ArticleAside";
import styles from "./ArticlePage.module.css";
import { ArticleNavigation } from "./ArticleNavigation";

export function ArticlePage({ 
  article,
  tags 
}: ArticleProps) {
  
  const breadcrumbData = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: article.title, href: `/blog/article/${article.slug}` },
  ];

  return(
    <main className={styles.main}>
      <Container className={styles.container}>
        <div className={styles.layout}>
          <article className={styles.article}>
            <ArticleHeader 
              breadcrumb={breadcrumbData}
              article={article} 
            />
          
            <ArticleSection sections={article.sections} />

            <ArticleNavigation/>
          </article>
        
          <aside className={styles.aside}>
            <ArticleAside 
              sections={article.sections}
              tags={tags}
            />
          </aside>
        </div>
      </Container>
  </main>  
  );
}