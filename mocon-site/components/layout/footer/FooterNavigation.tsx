import { footerNavigation } from "@/content/footerNavigation";
import styles from "./FooterNavigation.module.css";

export function FooterNavigation() {
  return (
    <div className={styles.footerNavigationContainer}>
      {footerNavigation.map((section, index) => (
        <div key={index} className={styles.footerColumn}>
          <p className={styles.footerCategory}>{section.category}</p>
            
          <ul className={styles.footerLinklist}>
            {section.links.map((link, linkIndex) => (
               <li key={linkIndex}>
                 <a href={link.href}>{link.label}</a>
               </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}