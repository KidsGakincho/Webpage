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

/*
  return(
    <Link href={`/blog/article/${slug}`}>
      <article className={styles.blogListCard}>
        <div className={styles.image}>
          <CardImage
            src={resource.src}
            alt={resource.alt}
          />
        </div>

        <div className={styles.info}>
          <div className={styles.header}>
            <CardHeader 
              date={day}
            />

            <div className={styles.category}>
              <CardCategory
                category={category}
              />
            </div>
          </div>

          <div className={styles.title}>
            <CardTitle
              title={title}
            />
          </div>

          <div className={styles.description}>
            <CardDescription
              description={description}
            />
          </div>

          <CardHeader
            tag={tag}
            tagClassName={styles.tag}
          />

          <div className={styles.showDetail}>
            <span>記事を読む  →</span>
          </div>
        </div>

      </article>
    </Link>
  );
  */
}