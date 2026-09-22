import Image from "next/image";
import Link from "next/link";
import styles from "./BlogCard.module.css";

type BlogCardProps = {
  image: string,
  title: string;
  label: string;
  date: string;
  href: string;
};

export function BlogCard({
  image,
  title,
  label,
  date,
  href,
}: BlogCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={image}
          alt={title}
          fill
        />
      </div>

      <div className={styles.body}>
        <p className={styles.date}>
          {date}
        </p>

        <h3 className={styles.title}>
          {title}
        </h3>

        <p className={styles.category}>
          {label}
        </p>
      </div>
    </Link>
  );
}