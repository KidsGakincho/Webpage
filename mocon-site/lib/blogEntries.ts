import { blogList } from "@/content/blog/blogList";
import { BlogList } from "@/content/blog/blogList";

export function getBlogEntries(
  limit = 3
): BlogList {
  return [...blogList].sort( (a, b) =>
    new Date(b.day).getTime() - new Date(a.day).getTime()
  ).slice(0, limit);
}