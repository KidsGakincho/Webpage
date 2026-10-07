import { workComponents } from "@/content/works/workComponents";
import { works } from "@/content/works/workList";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const Work = workComponents[slug];
  const work = works.find(
    (work) => work.slug === slug
  );
  const tags = Array.from(
    new Set(works.flatMap((work) => work.tags))
  );

  if (!Work || !work) {
    return <p>記事が見つかりません</p>;
  }

  return <Work work={work} tags={tags} />;
}