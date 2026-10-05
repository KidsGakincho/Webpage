import { Container } from "../../container/Container";
import styles from "./ArticleWritter.module.css";

export function ArticleWritter () {
  return(
    <div className={styles.articleWritter}>
      <Container className={styles.container}>
        <div className={styles.layout}>
          <div>
            <div>Image</div>
          </div>
          <div>
            <div>この記事を書いた人</div>
            <div>著者名</div>
            <div>Webデザイン / フロントエンドエンジニア</div>
          </div>
        </div>
    
        <div>
          Webサイトのデザインとコーディングを担当しています。シンプルで優しいデザインが好きです。
        </div>

        <div className={styles.sns}>
          <div>Twitter</div>
          <div>Git</div>
          <div>Link</div>
        </div>
      </Container>
    </div>
  );
}