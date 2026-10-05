import { ArticleIndex } from "./ArticleIndex";
import { ArticleWritter } from "./ArticleWritter";
import { ArticleTag } from "./ArticleTag";
import { ArticleAsideProps } from "@/content/blog/article";
import styles from "./ArticleAside.module.css";

export function ArticleAside ({ 
  sections,
  tags 
}: ArticleAsideProps) {
  return(
    <div className={styles.articleAside}>
      <ArticleWritter/>

      <ArticleIndex sections={sections} />

      {/* ここに4回分の記事を表示する */}

      <ArticleTag tags={tags} />
    </div>
  );
}