import { socialLinks } from "@/content/socialLinks";
import styles from "./SocialLinks.module.css";

export function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.ariaLabel}
          className={styles.link}
        >
          {social.name}
        </a>
      ))}
    </div>
  );
}