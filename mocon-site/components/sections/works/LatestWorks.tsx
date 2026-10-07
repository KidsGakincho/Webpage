import { Carousel } from "@/components/common/carousel/Carousel";
import styles from "./LatestWorks.module.css";
import { Container } from "@/components/common/container/Container";
import { SectionHeader } from "@/components/common/section/SectionHeader";
import { works } from "@/content/works/workList";
import { WorkListCard } from "./workList/WorkListCard";

export function LatestWorks() {
  return (
    <section className={styles.works}>
      <Container className={styles.container}>

        <SectionHeader
          label={"WORKS"}
          title={"つくったもの"}
          color={"green"}
          actionLabel="すべての実績を見る"
          actionHref="/works/worklist/"
        />
    
        <Carousel columns={3} rows={1}>
          {works.map((work, index) => (
            <WorkListCard
              key={index}
              layout={"vertical"}
              {...work}
            />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}