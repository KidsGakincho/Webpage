import { ArticleHeader } from "@/components/common/articleLayout/ArticleHeader";
import { ArticleSection } from "@/components/common/articleLayout/ArticleSection";

export function NextjsArticle () {
  return(
    <article>
      <ArticleHeader />

      <ArticleSection />
      
      ここに記事の画像やソースコード、詳細を入力する
    </article>
  );
}