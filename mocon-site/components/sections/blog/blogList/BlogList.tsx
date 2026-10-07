"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/common/container/Container";
import { Carousel } from "@/components/common/carousel/Carousel";
import { SectionTitle } from "@/components/common/section/SectionTitle";
import { filterBlogs } from "@/lib/filterBlogs";
import { BlogListCard } from "@/components/sections/blog/blogList/BlogListCard";
import { getBlogEntries } from "@/lib/blogEntries";
import { Featured } from "@/components/common/topicCard/layout/Featured";
import { Article } from "@/content/blog/article";
import styles  from "./BlogList.module.css";

export function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState<Article[number]['category'][number] | "All">("All");
  const filteredBlogs = filterBlogs(selectedCategory);
  const categories = ["All", "Development", "Design", "Life", "Other"] as const;
  const latestBlog = getBlogEntries(1);

  return(
    <section className={styles.blogList}>
      <Container className={styles.container}>
        
        <div className={styles.hero}>
          <div>
            <SectionTitle
              label={"Blog"}
              title={"つくること、考えること"}
              color={"pink"}
              />
            <p>
              Web制作やデザイン、開発について<br/>
              moconの開発や考えを発信しています。 
            </p>
          </div>

          <div className={styles.heroImage}>
            <Image 
              className={styles.image}
              src="/images/blog/blogList/bloglist-hero.png"
              alt=""
              fill
            />
          </div>
        </div>

        <div className={styles.latest}>
          <div className={styles.subSection}>
            LATEST ARTICLE
          </div>
          <Featured 
            layout={"horizontal"}
            {...latestBlog[0]}
          />
        </div>

        <div className={styles.category}>
          <div className={styles.subSection}>
            CATEGORY
          </div>

          <div className={styles.categoryButton}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.button} ${
                  selectedCategory === category ? styles.active : ""
                }`}
                onClick={() => setSelectedCategory(category)}
                >
                {category}
              </button>
            ))}
          </div>

            <Carousel columns={3} rows={2}>
              {filteredBlogs.map((content) => (
                <BlogListCard
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