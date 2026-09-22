import { Container } from "@/components/common/container/Container";
import styles from "./Process.module.css";
import { SectionTitle } from "@/components/common/section/SectionTitle";
import { process } from "@/content/process";

export function Process() {
  return(
    <section className={styles.section}>
      <Container className={styles.container}>
        <SectionTitle
          label="PROCESS"
          title="ものづくりのながれ"
          color="pink"
        />
        
        <p>
          ヒアリングから公開後のサポートまで、<br/>
          一つひとつ丁寧に進めていきます。
        </p>

        <div>
          {process.map((item, index) => (
          <div key={index}>
            {index}
            {item.process}
            {item.description}
            {item.image}
          </div>
          ))} 
        </div>
      </Container>
    </section>
  );
}