import Image from "next/image";
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
          <div className={"mocon-logo"}>
            <Image
              src={"/images/mocon-logo.png"}
              alt={"mocon"}
              width={176}
              height={38}
            />
          </div>
        </Link>

        <Navigation />
      </div>
    </header>
  );
}