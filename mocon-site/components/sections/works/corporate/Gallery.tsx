import Image from "next/image";
import { CorporateContent } from "@/types/corporateContent";
import styles from "./CorporateSite.module.css";

type GalleryProps = {
    content: CorporateContent
}

export function Gallery({ content } : GalleryProps) {
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

      <div className={styles.image}>      
      {content.resources && (
        content.resources.map((item, index) => (
          <div key={index}>
          <Image
            src={item.src}
            alt={item.alt}/>
          </div>
        ))
      )}
      </div>
    </section>


  );
}