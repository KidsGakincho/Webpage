import Link from "next/link";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.text}>
            <p className={styles.label}>
              CONTACT
            </p>

            <h2 className={styles.title}>
              新しいプロジェクトを
              <br />
              一緒にはじめませんか？
            </h2>

            <p className={styles.description}>
              Webサイト制作、UI/UXデザイン、
              <br />
              システム開発など、お気軽にご相談ください。
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.button}
          >
            <span>CONTACT</span>
            <span className={styles.arrow}>→</span>
          </Link>

        </div>
      </div>
    </section>
  );
}