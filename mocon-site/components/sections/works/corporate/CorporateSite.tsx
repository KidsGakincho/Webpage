import { Container } from "@/components/common/container/Container";
import { Design } from "./Design";
import { Overview } from "./Overview";
import { Development } from "./Development";
import { Gallery } from "./Gallery";

import styles from "./CorporateSite.module.css";
import { corporateContents } from "@/content/works/corporateSite";
import Link from "next/link";

export function CorporateSite() {
  return(
    <section className={styles.corporateSite}>
      <Container className={styles.container}>

        {corporateContents.map((content) => {
          switch (content.type) {
            case "overview":
              return <Overview key={content.number} content={content} />;
            case "design":
              return <Design key={content.number} content={content} />  
            case "development":
              return <Development key={content.number} content={content} />;
            case "gallery":
              return <Gallery key={content.number} content={content} />;
            default:
              return null;
          }
        })}

      <div className={styles.footerItems}>
        <Link
          href={""}
          className={styles.footerButton}>
          <span className={styles.colorBlue}>←</span>{"  前の作品を見る"}
        </Link>
        
        <Link
          href={""}
          className={styles.centerButton}>
        <span>↑</span>{"  Works一覧へ  "}<span>↑</span>
        </Link>

        <Link
          href={""}
          className={styles.footerButton}>
        {"次の作品を見る  "}<span className={styles.colorBlue}>→</span>
        </Link>
      </div>

      </Container>
    </section>
    );
}