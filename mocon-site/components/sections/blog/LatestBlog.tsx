import { Container } from "@/components/common/container/Container";
import { SectionHeader } from "@/components/common/section/SectionHeader";
import styles from "@/components/sections/blog/LatestBlog.module.css";
import { getBlogEntries } from "@/lib/blogEntries";
import { BlogListCard } from "./blogList/BlogListCard";

export function LatestBlog() {
  const topics = getBlogEntries(3);

  return(
    <section className={styles.blog}>
      <Container className={styles.container}>
        <SectionHeader
          label={"BLOG"}
          title={"お知らせ・ブログ"}
          color={"blue"}
          actionLabel="すべての記事を見る"
          actionHref="/blog/"
        />

        <div className={styles.entry}>
          {topics.map((topic) => (
            <BlogListCard
              key={topic.slug}
              layout={"vertical"}
              {...topic}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}