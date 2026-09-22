import { getServices } from "@/lib/services";
import styles from "./ServiceList.module.css";
import { ServiceCard } from "./ServiceCard";
import { Container } from "@/components/common/container/Container";
import { SectionTitle } from "@/components/common/section/SectionTitle";

export function ServiceList() {
  const services = getServices();

  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.heading}>
          <SectionTitle
            label="SERVICE"
            title="わたしたちにできること"
            color="blue"
          />
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </Container>
  </section>
  );
}