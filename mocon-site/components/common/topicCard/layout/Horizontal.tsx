import Link from "next/link";
import styles from "./Horizontal.module.css";
import { CardImage } from "../content/CardImage";
import { CardHeader } from "../content/CardHeader";
import { CardCategory } from "../content/CardCategory";
import { CardTitle } from "../content/CardTitle";
import { CardDescription } from "../content/CardDescription";

type HorizontalVariant = "default" | "featured";

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
  title: string;
  variant? : HorizontalVariant;
};

export function Horizontal ({
  category,
  day,
  title,
  description,
  tag,
  resource,
  slug,
  variant = "default",
}: CardProps) {
  return(
    <Link href={slug}>
      <article className={`${styles.horizontal} ${styles[variant]}`}>
        <div className={styles.image}>
          <CardImage
            src={resource.src}
            alt={resource.alt}
          />
        </div>

        <div className={styles.info}>  
          
          <div className={styles.header}>
            {day && (
              <CardHeader day={day} variant={variant} />
            )}

            {category && (
              <CardCategory category={category} variant={variant} />
            )}

            {tag && (
              <CardHeader tag={tag} variant={variant} />
            )}
          </div>
  
          {title && (
            <CardTitle title={title} variant={variant} />
          )}

          {description && (
            <CardDescription description={description} variant={variant} />
          )}  

          {variant === "featured" && (
            <div className={styles.showDetail}>
              <span>記事を読む  →</span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}