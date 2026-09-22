import styles from "./Tag.module.css";

type TagProps = {
  label: string;
}

export function Tag({ label } : TagProps) {
  const className = {
    "Web Site": styles.web,
    "App": styles.app,
    "System": styles.system,
  }[label];

  return (
    <span className={`${styles.tag} ${className}`}>
      {label}
    </span>
  );
}