import { Horizontal } from "@/components/common/topicCard/layout/Horizontal";
import { Vertical } from "@/components/common/topicCard/layout/Vertical";

type blogListCardProps = {
  category: string[];
  day: string;
  description: string;
  resource: {
    src: string,
    alt: string
  };
  slug: string;
  tag: string[];
  title: string;
  layout?: string;
}

export function BlogListCard({
  category,
  day,
  description,
  resource,
  slug,
  tag,
  title,
  layout = "vertical",
}: blogListCardProps) {

  const content = {
    category,
    day,
    description,
    resource,
    slug,
    tag,
    title,
  }

  switch (layout) {
    case "horizontal":
      return <Horizontal {...content} />;
    case "vertical":
      return <Vertical {...content} />;
    default:
      return null;
  }
}