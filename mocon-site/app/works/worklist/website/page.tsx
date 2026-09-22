import { CorporateSite } from "@/components/sections/works/corporate/CorporateSite";
import { WorksHero } from "@/components/sections/works/corporate/WorksHero";
import { Blob } from "@/components/decorations/blobs/Blob";
import styles from "@/components/decorations/blobs/Blob.module.css";

export default function LatestWorks() {
  /*
  const latestWork = Works.find((work) => work.id === selectedID);
  */

  return(
      <main>
        <Blob 
          className={styles.blobTopRight}
          size={240}
          color={"#f45b8a"}
          seed={4}
        />

        <Blob 
          className={styles.blobTopLeft}
          size={300}
          color={"#f5c928"}
          seed={5}
        />

        <Blob 
          className={styles.blobBottomLeft}
          size={240}
          color={"#f5c928"}
          seed={3}
        />

        <Blob 
          className={styles.blobBottomRight}
          size={240}
          color={"#4da3df"}
          seed={5}
        />

        <Blob 
          className={styles.blobBottomRight2}
          size={240}
          color={"#6fba72"}
          seed={3}
          variation={0.55}
          points={9}
        />

        <Blob 
          className={styles.blobBottomLeft2}
          size={250}
          color={"#f45b8a"}
          seed={4}
          variation={0.90}
        />

      {/* TODO: ページの内容をそれぞれのコンポネントに渡す */}
      {/*
      {latestWork.type === "corporate" && <CorporateWork />}
      {latestWork.type === "portfolio" && <PortfolioWork />}
      {latestWork.type === "app" && <AppWork />}
      */}
        <WorksHero />
        <CorporateSite />
      </main>
    );
}