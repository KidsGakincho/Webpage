import Link from "next/link";
import { newsItems } from "@/content/news/news";
import styles from "./NewsSection.module.css";
import { SectionTitle } from "@/components/common/SectionTitle";

export function NewsSection() {
  const latestNews = newsItems.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <SectionTitle label={"NEWS"} title={"お知らせ"} />

          <Link
            href="/news"
            className={styles.more}
          >
            VIEW ALL
            <span>→</span>
          </Link>
        </div>

        <div className={styles.list}>
          {latestNews.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={styles.item}
            >
              <time
                dateTime={item.date.replaceAll(".", "-")}
                className={styles.date}
              >
                {item.date}
              </time>

              <span className={styles.category}>
                {item.category}
              </span>

              <span className={styles.newsTitle}>
                {item.title}
              </span>

              <span className={styles.arrow}>
                →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}