import Image from "next/image";
import styles from "./CorporateSite.module.css";
import { CorporateContent } from "@/types/corporateContent";

type ContentProps = {
    content: CorporateContent
}

export function Development({ content } : ContentProps) {
  return (
    <section className={styles.contents}>

      <div className={styles.number}>
        <h2>{content.number}</h2>
      </div>

      <div>    
        <div className={styles.title}>
          <h2>{content.title}</h2>
        </div>
        <div className={styles.subtitle}>
          <p>{content.subtitle}</p>
        </div>
    
        <p className={styles.description}>{content.details}</p>
      </div>

      {content.resource && (
        <div className={styles.image}>
        <Image
          src={content.resource.src}
          alt={content.resource.alt}
          width={800}
          height={700}
        />
        </div>
      )}
    </section>
  );
}