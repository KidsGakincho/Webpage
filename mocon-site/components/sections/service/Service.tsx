import styles from "./Service.module.css";
import { ServiceCard } from "./ServiceCard";
import { Container } from "@/components/common/container/Container";
import { SectionTitle } from "@/components/common/section/SectionTitle";
import { services } from "@/content/services";

export function ServiceList() {
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

        <div className={styles.list}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              id={service.id}
              title={service.title}
              description={service.description}
              resource={service.resource}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}