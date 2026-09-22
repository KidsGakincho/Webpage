import { Horizontal } from "@/components/common/topicCard/layout/Horizontal";
import { Vertical } from "@/components/common/topicCard/layout/Vertical";

type WorkListCardProps = {
  category: string[];
  description: string;
  resource: {
    src: string,
    alt: string
  };
  slug: string;
  title: string;
  layout?: string;
}

export function WorkListCard({
  category,
  description,
  resource,
  slug,
  title,
  layout = "vertical",
}: WorkListCardProps) {

  const content = {
    title,
    description,
    category,
    resource,
    slug
  };

  switch (layout) {
    case "horizontal":
      return <Horizontal {...content} />;
    case "vertical":
      return <Vertical {...content} />;
    default:
      return null;
  }
}