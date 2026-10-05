import styles from "./ServiceCard.module.css";
import { CardImage } from "@/components/common/topicCard/content/CardImage";
import { CardTitle } from "@/components/common/topicCard/content/CardTitle";
import { CardDescription } from "@/components/common/topicCard/content/CardDescription";

type Service = {
  id: string;
  title: string;
  description: string;
  resource: {
    src: string;
    alt: string;
  }
}

export function ServiceCard({ 
  id,
  title,
  description,
  resource
}: Service) {
  return (
    <article className={styles.card}>
      <div className={`${styles.iconCircle} ${styles[`${id}`]}`}>
        <CardImage
          src={resource.src}
          alt={resource.alt}
        />
      </div>

      <CardTitle
        title={title}
        variant={"featured"}
      />

      <CardDescription
        description={description}
        variant={"featured"}
        truncate={false}
      />
    </article>
  );
}