import Link from "next/link";
import { FooterNavigation } from "./FooterNavigation";
import styles from "./Footer.module.css";
import { SocialLinks } from "../../ui/SocialLinks";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.main}>

          {/* 1. Logo / Company */}
          <div className={styles.company}>
            <Link href="/" className={styles.logo}>
              〇✕△☆ Company
            </Link>

            <p className={styles.description}>
              Design & Technology
            </p>

            <p className={styles.companyText}>
              デザインとテクノロジーで、
              <br />
              新しい価値を創造します。
            </p>

              {/* Social Media */}
              <SocialLinks />
          </div>

          {/* 2. Navigation */}
          <div className={styles.navigation}>
            <p className={styles.heading}>
              NAVIGATION
            </p>

            <FooterNavigation />
          </div>

          {/* 3. Contact */}
          <div className={styles.contact}>
            <p className={styles.heading}>
              CONTACT
            </p>

            <p className={styles.contactText}>
              お仕事のご相談やお問い合わせは
              <br />
              お気軽にご連絡ください。
            </p>

            <Link
              href="/contact"
              className={styles.contactLink}
            >
              CONTACT
              <span>→</span>
            </Link>
          </div>

        </div>

        {/* Bottom */}
        <div className={styles.bottom}>

          <p className={styles.copyright}>
            © 2026 NEXUS. All rights reserved.
          </p>

          <Link
            href="/privacy"
            className={styles.privacy}
          >
            PRIVACY POLICY
          </Link>

        </div>

      </div>
    </footer>
  );
}