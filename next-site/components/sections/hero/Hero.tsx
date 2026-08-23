import Link from "next/link";
import Image from "next/image";

import type { HeroData } from "@/content/hero";

import styles from "./Hero.module.css";

type HeroProps = {
  data: HeroData;
};

export function Hero({ data }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <div className={styles.content}>

          {data.eyebrow && (
            <p className={styles.eyebrow}>
              {data.eyebrow}
            </p>
          )}

          <h1 className={styles.title}>
            {data.title}
          </h1>

          {data.description && (
            <p className={styles.description}>
              {data.description}
            </p>
          )}

          {(data.primaryAction || data.secondaryAction) && (
            <div className={styles.actions}>

              {data.primaryAction && (
                <Link
                  href={data.primaryAction.href}
                  className={styles.primaryAction}
                >
                  {data.primaryAction.label}
                  <span>→</span>
                </Link>
              )}

              {data.secondaryAction && (
                <Link
                  href={data.secondaryAction.href}
                  className={styles.secondaryAction}
                >
                  {data.secondaryAction.label}
                  <span>→</span>
                </Link>
              )}

            </div>
          )}

        </div>

        {data.image && (
          <div className={styles.image}>
            <Image
              src={data.image}
              alt={data.imageAlt ?? ""}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}

      </div>
    </section>
  );
}