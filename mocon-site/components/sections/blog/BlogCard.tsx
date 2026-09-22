import { Horizontal } from "@/components/common/topicCard/layout/Horizontal";
import { Vertical } from "@/components/common/topicCard/layout/Vertical";

type BlogCardProps = {
  day: string;
  resource: {
    src: string,
    alt: string,
  },
  slug: string;
  tag: string[];
  title: string;
  layout: string;
};

export function BlogCard({
  day,
  resource,
  slug,
  tag,
  title,
  layout,
}: BlogCardProps) {
  
  const content = {
    day,
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
