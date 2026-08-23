import Link from "next/link";
import { footerNavigation } from "@/content/navigation";
import styles from "./FooterNavigation.module.css";

export function FooterNavigation() {
  return (
    <nav aria-label="フッターナビゲーション">
      <ul className={styles.list}>
        {footerNavigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={styles.link}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}