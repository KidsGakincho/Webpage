import { whyOurItems } from "@/content/whyOurCompany";
import styles from "./WhyUsCompany.module.css";
import { SectionTitle } from "@/components/common/SectionTitle";

export function WhyOurCompany() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <SectionTitle label={"WHY OUR COMPANY"} title={"私たちが選ばれる理由"} />

        <div className={styles.grid}>
          {whyOurItems.map((item) => (
            <article
              key={item.number}
              className={styles.card}
            >
              <p className={styles.number}>
                {item.number}
              </p>

              <h3 className={styles.cardTitle}>
                {item.title}
              </h3>

              <p className={styles.description}>
                {item.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}