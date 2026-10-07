import Link from "next/link";
import { Navigation } from "../navigation/Navigation";
import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
        <div className={styles.container}>

        <Link
          href="/"
          className={styles.logo}
        >
          NEXUS Company
        </Link>

        <Navigation />

        </div>
        </header>
    );
}