import { Horizontal } from "@/components/common/topicCard/layout/Horizontal";
import { Vertical } from "@/components/common/topicCard/layout/Vertical";

type WorkCardProps = {
  description: string;
  resource: {
    src: string,
    alt: string
  };
  slug: string;
  title: string;
  tag: string[];
  layout: string;
};

export function WorkCard({
  description,
  resource,
  slug,
  tag,
  title,
  layout = "vertical",
}: WorkCardProps) {
  
  const content = {
    title,
    description,
    tag,
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