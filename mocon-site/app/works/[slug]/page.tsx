import { workComponents } from "@/content/works/workComponents";
import { Works } from "@/content/works/works";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const Work = workComponents[slug];
  const work = Works.find(
    (work) => work.slug === slug
  );
  
  if (!Work || !work) {
    return <p>記事が見つかりません</p>;
  }

  return <Work work={work} />;
}