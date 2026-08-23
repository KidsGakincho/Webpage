import Image from "next/image";
import Link from "next/link";
import styles from "./AboutSection.module.css";
import { SectionTitle } from "@/components/common/SectionTitle";

export function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.heading}>
          <SectionTitle
            label="ABOUT"
            title="私たちについて"
          />
        </div>

        <div className={styles.content}>

          {/* Image */}
          <div className={styles.image}>
            <Image
              src="/images/about/about_office.png"
              alt="私たちのオフィス"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div className={styles.body}>

            <h3 className={styles.catchcopy}>
              本質を見つめ、
              <br />
              未来をデザインする。
            </h3>

            <p className={styles.description}>
              私たちは、デザインとテクノロジーを
              組み合わせ、お客様が抱える課題の
              本質を見つめます。
            </p>

            <p className={styles.description}>
              見た目の美しさだけではなく、
              使いやすさやビジネスの成果まで考え、
              最適なデジタル体験を提供します。
            </p>

            <Link
              href="/about"
              className={styles.link}
            >
              VIEW MORE
              <span>→</span>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}