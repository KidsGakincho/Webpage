import { CorporateContent } from "@/types/corporateContent";
import styles from "./CorporateSite.module.css";

type OverviewProps = {
    content: CorporateContent
}

export function Overview({ content }: OverviewProps) {
  return (
    <section className={styles.contents}>
    
      <div className={styles.number}>
        <h2>{content.number}</h2>
      </div>

      <div>
        <div className={styles.title}>
          <h2>{content.title}</h2>
        </div>
        <div className={styles.subtitle}>
          <p>{content.subtitle}</p>
        </div>
      
        <p className={styles.description}>{content.details}</p>
      </div>

      <div className={styles.projectInfo}>
        <div className={styles.tableCaption}>
          Project Info
        </div>
      <table>
        <tbody>
            <tr>
              <td>Client</td>
              <td>mocon 制作スタジオ</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>Web Design / Development</td>
            </tr>
            <tr>
              <td>Role</td>
              <td>Design / Frontend Development</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>２ケ月</td>  
            </tr>
            <tr>
              <td>Technology</td>
              <td>Next.js / TypeScript / CSS Modules</td>  
            </tr>
            <tr>
              <td>Year</td>
              <td>2026</td>  
            </tr>
        </tbody>
      </table>
      </div>

    </section>
  );
}