import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import { SocialLinks } from "../../sections/socialLinks/SocialLinks";
import { FooterNavigation } from "./FooterNavigation";
import { Container } from "@/components/common/container/Container";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>

        <div className={styles.main}>

          {/* 1. Logo / Company */}
          <div className={styles.company}>
            <Link href="/" className={styles.logo}>
                <Image 
                  src={"/images/mocon-logo.png"}
                  alt={"mocon-logo"}
                  width={176}
                  height={38}
                  />
            </Link>

            <p className={styles.companyText}>
              アイデアとデザインの力で、
              <br />
              人の心を動かすコンテンツをつくる
              <br />
              クリエイティブチームです。
            </p>

              {/* Social Media */}
              <SocialLinks />
          </div>

          {/* 2. Navigation */}
          <div className={styles.navigation}>
            <FooterNavigation />
          </div>

        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 mocon Inc.
          </p>
        </div>

      </Container>
    </footer>
  );
}