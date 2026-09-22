import Link from "next/link";
import styles from "./Navigation.module.css";
import { headerNavigation } from "@/content/navigation";

export function Navigation() {
  return (
    <nav aria-label="main-navigation">
      <ul className={styles.list}>
        {headerNavigation.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}

        {/* contact button */}
        <li key="/contact">
          <Link 
            href="/contact"
            className={styles.primaryAction}>
            {"CONTACT"}  
          </Link>
        </li>
      </ul>
    </nav>
  );
}