import { ArticlePage } from "@/components/common/articleLayout/body/ArticlePage";
import { ArticleProps } from "@/content/blog/article";

export function DesignArticle ({ 
  article,
  tags
}: ArticleProps) {
  return (
    <ArticlePage article={article} tags={tags} />
  );
}