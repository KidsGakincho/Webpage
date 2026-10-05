import { BreadcrumbProps } from "@/content/blog/breadcrumb";
import styles from "./Breadcrumb.module.css";
import Link from "next/link";

export function Breadcrumb ({ items }: BreadcrumbProps) {
  return(
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            item.label
          )}

          {index < items.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
}