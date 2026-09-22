import { blogList } from "@/content/blog/blogList";

export function filterBlogs(category: string) {
  if (category === "All") {
    return blogList;
  }

  return blogList.filter((blogList) => blogList.category.includes(category));
}