import Image from "next/image";
import { CardDescription } from "@/components/common/topicCard/content/CardDescription";
import { CardTitle } from "@/components/common/topicCard/content/CardTitle";
import styles from "./PointCard.module.css";

type Point = {
  id: string;
  section: string;
  description: string;
  resource: {
    src: string;
    alt: string;
  }
}

export function PointCard ({
  id,
  section,
  description,
  resource
}: Point) {
  return(
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          src={resource.src}
          alt={resource.alt}
          fill
        />
      </div>
      <div>
        <CardTitle 
          title={section}
          variant={"featured"}
        />
        <CardDescription 
          description={description}
          variant={"default"}
        />
      </div>
    </div>
  );
}