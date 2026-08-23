import { processItems } from "@/content/process";
import styles from "./ProcessSection.module.css";
import { SectionTitle } from "@/components/common/SectionTitle";

export function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.heading}>
          <SectionTitle label={"PROCESS"} title={"ご相談から公開まで"} />

          <p className={styles.description}>
            プロジェクトの目的や課題を共有し、
            <br />
            企画から開発、公開まで一貫してサポートします。
          </p>
        </div>

        <div className={styles.timeline}>
          {processItems.map((item) => (
            <article
              key={item.number}
              className={styles.item}
            >
              <div className={styles.number}>
                {item.number}
              </div>

              <div className={styles.line} />

              <h3 className={styles.itemTitle}>
                {item.title}
              </h3>

              <p className={styles.itemDescription}>
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}