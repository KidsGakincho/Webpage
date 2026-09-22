import { workList } from "@/content/works/workList";

export function filterWorks(category: string) {
  if (category === "All") {
    return workList;
  }

  return workList.filter((workList) => workList.category.includes(category));
}