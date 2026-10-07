import { Article } from "@/content/blog/article";
import { blogList } from "@/content/blog/blogList";

export function filterBlogs(category: Article[number]['category'][number] | "All") {
  if (category === "All") {
    return blogList;
  }

  return blogList.filter((blog) => blog.category.includes(category));
}