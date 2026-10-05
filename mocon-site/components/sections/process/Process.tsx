import { SectionTitle } from "@/components/common/section/SectionTitle";
import { process } from "@/content/process";
import { ProcessCard } from "./ProcessCard";
import styles from "./Process.module.css";

export function Process() {
  return(
    <section className={styles.section}>
      <div className={styles.title}>
        <SectionTitle
          label="PROCESS"
          title="ものづくりのながれ"
          color="pink"
        />
        
        <span>
          ヒアリングから公開後のサポートまで、一つひとつ丁寧に進めていきます。
        </span>
      </div>

      <div className={styles.list}>
        {process.map((item, index) => (
          <div key={index} className={styles.card}>
            <ProcessCard
              id={item.id}
              process={item.process}
              description={item.description}
              resource={item.resource}
            />
          </div>
        ))} 
        </div>
    </section>
  );
}