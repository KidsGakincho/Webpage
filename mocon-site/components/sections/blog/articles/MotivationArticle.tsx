import { ArticlePage } from "@/components/common/articleLayout/body/ArticlePage";
import { ArticleProps } from "@/content/blog/article";

export function MotivationArticle ({
  article,
  tags
}: ArticleProps) {
  return(
    <ArticlePage article={article} tags={tags} />
  );
}