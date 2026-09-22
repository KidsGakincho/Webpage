import Link from "next/link";
import styles from "./Vertical.module.css";
import { CardImage } from "../content/CardImage";
import { CardHeader } from "../content/CardHeader";
import { CardTitle } from "../content/CardTitle";
import { CardDescription } from "../content/CardDescription";
import { CardCategory } from "../content/CardCategory";

type VerticalVariant = "default" | "featured";

type CardProps = {
  category?: string[];
  day?: string;
  description?: string;
  resource: {
    src: string,
    alt: string
  };
  slug: string;
  tag?: string[];
  title?: string;
  variant?: VerticalVariant;
};

export function Vertical ({
  category,
  day,
  title,
  description,
  tag,
  resource,
  slug,
  variant = "default"
}: CardProps) {
  return(
    <Link href={slug}>
      <article className={`${styles.vertical} ${styles[variant]}`}>
        <div className={styles.image}>
          <CardImage
            src={resource.src}
            alt={resource.alt}
          />
        </div>

        <div className={styles.info}>  
          
          <div className={styles.header}>
            {day && (
              <CardHeader day={day} variant={variant}/>
            )}

            {category && (
              <CardCategory category={category} variant={variant} />
            )}
          </div>
  
          {title && (
            <CardTitle title={title} variant={variant} />
          )}

          {description && (
            <CardDescription description={description} variant={variant} />
          )}

          {tag && (
            <CardHeader tag={tag} variant={variant} />
          )}
        </div>

        {variant === "featured" && (
          <div className={styles.showDetail}>
            <span>記事を読む  →</span>
          </div>
        )}

      </article>
    </Link>
  );
}