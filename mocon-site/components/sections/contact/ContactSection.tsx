import Image from "next/image";
import styles from "./ContactSection.module.css";
import { Blobs } from "@/components/decorations/blobs/Blobs";
import { Container } from "@/components/common/container/Container";

export function ContactSection() {
    return(
      <section className={styles.section}>
        
        <Blobs />

        <Container className={styles.container}>
          {/* contact contents */}
          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <Image
                src={"/images/contact/contact-illustration.png"}
                alt=""
                fill
                className={styles.image}
              />       
            </div>

            <div className={styles.text}>
              <h2 className={styles.title}>
                一緒に、<br />
                <span className={styles.pink}>ワ</span>
                <span className={styles.blue}>ク</span>
                <span className={styles.green}>ワ</span>
                <span className={styles.yellow}>ク</span>するものを<br />
                つくりませんか？
              </h2>

              <p className={styles.description}>
                プロジェクトの相談、<br />
                まずはお気軽にお問い合わせください。
              </p>

              <div className={styles.action}>
                <a href="/contact" className={styles.button}>  
                  お問い合わせする
                <span>→</span>
                </a>
              </div>
            </div>

          </div>        
        </Container>
      </section>
    );
}