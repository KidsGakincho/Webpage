import { Horizontal } from "./Horizontal";
import { Vertical } from "./Vertical";

type FeaturedLayout = "horizontal" | "vertical";

type FeaturedProps = {
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
  layout: FeaturedLayout;
}

export function Featured ({
  category,
  day,
  description,
  resource,
  slug,
  tag,
  title,
  layout,
}: FeaturedProps) {

  const content = {
    category,
    day,
    description,
    resource,
    slug,
    tag,
    title,
  };

  switch (layout) {
    case "horizontal":
      return <Horizontal {...content} variant="featured" />;
    case "vertical":
      return <Vertical {...content} variant="featured" />;
    default:
      return null;
  }
}