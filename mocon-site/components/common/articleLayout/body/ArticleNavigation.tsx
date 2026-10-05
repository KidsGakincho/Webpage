import { Container } from "../../container/Container";
import styles from "./ArticleNavigation.module.css";

export function ArticleNavigation () {
  return(
    <div className={styles.articleNavigation}>
      <Container className={styles.container}>
        <nav className={styles.navigation}>

          {/* left */}
          <div className={`${styles.navItem} ${styles.prevArticle}`}>
            <div className={styles.imageWrapper}>image</div>
            <div className={styles.textWrapper}>
             <span className={styles.label}>前の記事</span>
             <h4 className={styles.title}>Title</h4>
           </div>
          </div>

          {/* right */}
          <div className={`${styles.navItem} ${styles.nextArticle}`}>
            <div className={styles.textWrapper}>
              <span className={styles.label}>次の記事</span>
              <h4 className={styles.title}>Title</h4>
            </div>
            <div className={styles.imageWrapper}>image</div>
          </div>
        </nav>
      </Container>
    </div>
  );    
}