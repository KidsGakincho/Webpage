import styles from "./CardDescription.module.css";

type Variant = "default" | "featured";

type CardDescriptionProps = {
  description: string;
  variant: Variant; 
}

export function CardDescription ({
  description,
  variant = "default"
}: CardDescriptionProps) {
  return(
    <span className={`${styles.cardDescription} ${styles[variant]}`}>
      {description}
    </span>
  );
}