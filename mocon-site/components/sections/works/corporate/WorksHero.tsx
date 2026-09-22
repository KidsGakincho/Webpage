import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/container/Container";
import styles from "./WorksHero.module.css";

export function WorksHero() {
  return(
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.description}>
            <Link
              href={""}
              className={styles.primaryAction}
            >
              <span className={styles.colorPink}>←</span>{"  Works一覧へ"}
            </Link>
          </div>

          <div className={styles.category}>
            Web Design / Development
          </div>

          <div className={styles.heroTitle}>
            mocon コーポレートサイト
          </div>

          <div className={styles.description}>
            <span>
              やさしさとワクワクを届ける<br/>
              シンプルで親しみやすいコーポレートサイト
            </span>
          </div>
        </div>

        <div className={styles.image}>
          <Image
            src="/images/works/corporate/corporate-hero.png"
            alt="corporate-site hero"
            width={800}
            height={700}          
          />
        </div>

      </Container>
    </section>
  );
}