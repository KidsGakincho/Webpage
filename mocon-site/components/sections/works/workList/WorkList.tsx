"use client";

import Image from "next/image";
import { Container } from "@/components/common/container/Container";
import { SectionTitle } from "@/components/common/section/SectionTitle";
import { WorkListCard } from "./WorkListCard";
import { Carousel } from "@/components/common/carousel/Carousel";
import styles from "./WorkList.module.css";
import { useState } from "react";
import { filterWorks } from "@/lib/filterWorks";

export function WorkList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredWorks = filterWorks(selectedCategory);
  const tags = ["All", "Web Site", "App", "System"];

  return(
    <section className={styles.workList}>
      <Container className={styles.container}>

        <div className={styles.hero}>
          <div>
          <SectionTitle
            label={"Works"}
            title={"つくったもの、届けたもの"}
            color="blue"
          />
          <p>
            <br/>
            moconがこれまでに手掛けたプロジェクトをご紹介します。<br/>
            Webサイト、アプリ、システム開発など、<br/>
            様々な領域での取り組みを掲載しています。
          </p>
          </div>

          <div className={styles.heroImage}>
            <Image 
              className={styles.image}
              src="/images/works/worklist/works-hero-illustration.png"
              alt="Work listの画像"
              fill
            />
          </div>
        </div>

        <div className={styles.category}>
          {tags.map((item) => (
            <button
              key={item}
              className={`${styles.button} ${
                selectedCategory === item ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(item)}
             >
              {item}
            </button>
          ))}
        </div>
        
        <div className={styles.contents}>
          <Carousel columns={3} rows={2}>
            {filteredWorks.map((content) => (
              <WorkListCard
                key={content.id}
                {...content}
              />
            ))}

          </Carousel>
        </div>

      </Container>
    </section>
  );
}