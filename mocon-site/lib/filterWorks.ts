import { Works } from "@/content/works/workList";
import { works } from "@/content/works/workList";

export function filterWorks(category: Works[number]['category'][number] | "All") {
  if (category === "All") {
    return works;
  }

  return works.filter((work) => work.category.includes(category));
}