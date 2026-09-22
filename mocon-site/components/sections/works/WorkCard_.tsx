import Image from "next/image";
import Link from "next/link";
import styles from "./WorkCard.module.css";

type WorkCardProps = {
  title: string;
  description: string;
  tag: string[];
  image: string;
  href: string;
};

export function WorkCard({
  title,
  description,
  tag,
  image,
  href,
}: WorkCardProps) {
  return (
    <Link href={href} className={styles.card}>

      <div className={styles.image}>
        <Image
          src={image}
          alt={description}
          width={512}
          height={512}
        />
      </div>

      <div className={styles.info}>

        <h3 className={styles.title}>
          {description}
        </h3>

        <h3 className={styles.label}>
          {title}
        </h3>

        <p className={styles.category}>
          {tag.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
      </div>

    </Link>
  );
}