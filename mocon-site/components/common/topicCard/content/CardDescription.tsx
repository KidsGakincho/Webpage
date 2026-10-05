import styles from "./CardDescription.module.css";

type Variant = "default" | "featured";

type CardDescriptionProps = {
  description: string;
  variant: Variant; 
  truncate?: boolean;
}

export function CardDescription ({
  description,
  variant = "default",
  truncate = true,
}: CardDescriptionProps) {
  return(
    <p className={`${truncate ? styles.truncate : ""} ${styles[variant]}`}>
      {description}
    </p>
  );
}