import { CardTitle } from "@/components/common/topicCard/content/CardTitle";
import { CardDescription } from "@/components/common/topicCard/content/CardDescription";
import { CardImage } from "@/components/common/topicCard/content/CardImage";
import styles from "./ProcessCard.module.css";

type Process = {
  id: string,
  process: string,
  description: string,
  resource: {
    src: string;
    alt: string;
  },
}

export function ProcessCard({
  id,
  process,
  description,
  resource,
}: Process) {
  return(
    <div className={styles.card}>

      <div className={styles.number}>
        {id}
      </div>

      <div className={styles.image}>
        <CardImage
          src={resource.src}
          alt={resource.alt}
        />
      </div>

      <div className={styles.title}>
        <CardTitle
          title={process}
          variant={"featured"}
        />
      </div>

      <CardDescription
        description={description}
        variant={"default"}
        truncate={false}
        />
      </div>
  );
}