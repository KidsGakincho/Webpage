import Link from "next/link";
import styles from "./SectionHeader.module.css";
import { SectionTitle } from "./SectionTitle";

type SectionHeaderProps = {
    label: string;
    title?: string;
    color?: "pink" | "green" | "yellow" | "blue";
    actionLabel?: string;
    actionHref?: string;
};

export function SectionHeader({
    label,
    title,
    color = "pink",
    actionLabel,
    actionHref,
}: SectionHeaderProps) {
    return (
        <div className={styles.header}>
            <SectionTitle
              label={label}
              title={title}
              color={color}
            />
            
        {actionLabel && actionHref && (
          <Link
            href={actionHref}
            className={`${styles.action} ${styles[color]}`}
          >
            {actionLabel} →
          </Link>
        )}
        </div>
    );
}