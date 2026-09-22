import styles from "./CardCategory.module.css";

type Variant = "default" | "featured";

type CategoryProps = {
  category: string[];
  variant: Variant;
}

export function CardCategory ({
  category,
  variant = "default"
}: CategoryProps) {
  return(
    <div>
      {category.map((item, index) => (
        <span key={index} className={`${styles.cardCategory} ${styles[variant]}`}>{item}</span>
      ))}
    </div>
  );
}