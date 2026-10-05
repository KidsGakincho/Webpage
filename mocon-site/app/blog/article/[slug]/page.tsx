import { articles } from "@/content/blog/articles";
import { articleComponents } from "@/content/blog/articleComponents";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const Article = articleComponents[slug];
  const article = articles.find( 
    (article) => article.slug === slug
  );
  const tags = Array.from(
    new Set(articles.flatMap((article) => article.tags))
  );

  if (!Article || !article) {
    return <p>記事が見つかりません。</p>;
  }

  return <Article article={article} tags={tags} />;
}