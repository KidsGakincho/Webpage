import { Container } from "@/components/common/container/Container";
import { SectionTitle } from "@/components/common/section/SectionTitle";
import { point } from "@/content/point";
import styles from "./Point.module.css";
import { PointCard } from "./PointCard";

export function Point() {
  return (
    <section className={styles.section}>
      <Container className={styles.content}>
        <div className={styles.horizontal}>
          <div>
            <SectionTitle
              label="POINT"
              title="大切にしていること"
              color="green"
            />
 
            <div className={styles.description}>
              moconは見た目のデザインだけでなく<br/>
              伝わる・使いやすい・成果につながることを<br/>
              大切にしています。
            </div>
          </div>

          <div className={styles.row}>
            {point.map((item, index) => (
              <PointCard 
                key={index}
                id={item.id}
                section={item.section}
                description={item.description}
                resource={item.resource}
              />
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}