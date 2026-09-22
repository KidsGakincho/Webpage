import styles from "./WorkListCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { Tag } from "@/components/common/tag/Tag";

type WorkListCardProps = {
  image: string;
  title: string;
  description: string;
  category: string;
  href: string;
}

export function WorkListCard({
  image,
  title,
  description,
  category,
  href,
}: WorkListCardProps) {  
  return(
    <Link href={href} className={styles.card}>

      <Image 
        src={image}
        alt={title}
        width={512}
        height={512}
      />

      <div className={styles.contents}>
        <Tag label={category} />

        <div className={styles.title}>
          {title}
        </div>

        <div className={styles.description}>
          {description}
        </div>
      </div>
    </Link>
  );
}