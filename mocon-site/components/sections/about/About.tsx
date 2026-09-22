import Link from "next/link";
import Image from "next/image";
import styles from "./About.module.css";
import { Container } from "@/components/common/container/Container";
import { SectionTitle } from "@/components/common/section/SectionTitle";
import { Blobs } from "@/components/decorations/blobs/Blobs";

export function About() {
  return(
    <section className={styles.about}>

      <Blobs />

      <Container className={styles.aboutContainer}>
        <div className={styles.content}>

          <SectionTitle 
            title={""}
            label={"ABOUT"}
            color={"pink"}
          />

          <p className={styles.aboutTitle}>
            アイデアを、<br />
            もっと自由に。
          </p>

          <p className={styles.description}>
            私たちはデザインとテクノロジーを通じて、<br/>
            企画やブランドの「やりたい」を<br/>
            カタチにするクリエイティブチームです。
          </p>

          {/* about us */}
          <div className={styles.actions}>
            <Link
              href={"./about"}
              className={styles.primaryAction}
            >
              <span>私たちについて  →</span>
            </Link>
          </div>
        </div>
            
        {/* about image */}
        <div className={styles.image}>
          <Image
            src={"/images/about/about-illustration.png"}
            alt={/*data.imageAlt ??*/""}
            width={800}
            height={700}
          />
        </div> 
      </Container>           
    </section>
  );
}