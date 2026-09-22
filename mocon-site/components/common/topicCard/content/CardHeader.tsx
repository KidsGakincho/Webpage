import styles from "./CardHeader.module.css";

/* component for day */
type Variant = "default" | "featured";

type CardHeaderProps = {
  day?: string;
  tag?: string[];
  variant: Variant;
};

export function CardHeader ({
  day,
  tag,
  variant = "default"
}: CardHeaderProps) {
  return(
    <div>
      {day && (
        <span className={`${styles.day} ${styles[variant]}`}>{day}</span>
      )}

      {tag && (
        tag.map((item, index) => (
          <span key={index} className={`${styles.tag} ${styles[variant]}`}>{item}</span>
          /*
          <span key={index} className={tagClassName}>{item}</span>
          */
        ))
      )}
    </div>
  );
}