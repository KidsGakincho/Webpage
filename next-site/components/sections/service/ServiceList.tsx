import { ServiceCard } from "./ServiceCard";
import { getServices } from "@/lib/services";
import styles from "./ServiceList.module.css";
import { SectionTitle } from "@/components/common/SectionTitle";



export function ServiceList() {
  const services = getServices();  
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Section Title */}
        <div className={styles.heading}>
          <SectionTitle
            label="SERVICE"
            title="私たちのサービス" 
          />
        </div>

        {/* Service List */}
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

      </div>
    </section>
  );
}