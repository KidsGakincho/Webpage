import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";
import { Container } from "@/components/common/container/Container";
import type { HeroData } from "@/content/hero";
import { Blobs } from "@/components/decorations/blobs/Blobs";

type HeroProps = {
  data: HeroData;
};

export function Hero({ data }: HeroProps) {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>        
        <div className={styles.content}>

          <h1 className={styles.heroTitle}>
            <span className={styles.wakuwaku}>
              <span className={styles.colorPink}>ワ</span>
              <span className={styles.colorGreen}>ク</span>
              <span className={styles.colorYellow}>ワ</span>
              <span className={styles.colorBlue}>ク</span>
            </span>を、カタチにしよう。
          </h1>

          {data.description && (
            <p className={styles.description}>
              アイデアとデザインの力で、<br />
              人の心を動かすコンテンツをつくります。
            </p>
          )}

          {(data.primaryAction) && (
            <div className={styles.actions}>
              {data.primaryAction && (
                <Link
                  href={"/services"}
                  className={styles.primaryAction}
                >
                  {"私たちのサービス"}
                  <span>→</span>
                </Link>
              )}
            </div>
          )}

        </div>

        {data.image && (
          <div className={styles.image}>
            <Image
              src={"/images/hero/hero-illustration.png"}
              alt={"moconのサービスイメージ"}
              width={800}
              height={700}
            />
          </div>
        )}

      </Container>
    </section>
  );
}