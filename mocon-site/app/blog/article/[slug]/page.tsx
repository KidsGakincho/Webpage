import { articleComponents } from "@/content/blog/articleComponents";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const Article = articleComponents[slug];

  if (!Article) {
    return <p>記事が見つかりません。</p>;
  }

  return <Article/>;
}