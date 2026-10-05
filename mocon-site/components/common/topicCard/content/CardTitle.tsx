import styles from "./CardTitle.module.css";

type Variant = "default" | "featured";

type CardTitleProps = {
  title: string;
  variant: Variant;
}

export function CardTitle ({
  title,
  variant = "default"
}: CardTitleProps) {
  return(
    <h3 className={`${styles.cardTitle} ${styles[variant]}`}>
      {title}
    </h3>
  );
}