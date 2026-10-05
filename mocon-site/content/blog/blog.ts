export type Topics = {
  title: string;
  tag: string[];
  date: string;
  resource: {
    src: string;
    alt: string;
  };
  href: string;
  publishedAt: string;
}[];

export const topics: Topics = [
  {
    title: "デザインの力で伝える、ということ",
    date: "2026年  8月20日",
    tag: [
      "Information",
      "Design",
      "UI/UX"
    ],
    resource: {
      src: "/images/blog/blog-01.png",
      alt: ""
    },
    href: "/blogs/blog-01",
    publishedAt: "2026-08-20",
  },
  {
    title: "コーポレイトサイトをリニューアルしました。",
    date: "2026年  8月5日",
    tag: [
        "Development",

    ],
    resource: {
      src: "/images/blog/blog-02.png",
      alt: ""
    },
    href: "/blogs/blog-02",
    publishedAt: "2026-08-05",
  },
  {
    title: "制作チームの紹介",
    date: "2026年  7月20日",
    tag: [
        "Work"
    ],
    resource: {
      src: "/images/blog/blog-03.png",
      alt: ""
    },
    href: "/blogs/blog-03",
    publishedAt: "2026-07-20",
  },
  {
    title: "test",
    date: "1970年  1月1日",
    tag: [
        "test test test test",
        "test test test",
        "test test"
    ],
    resource: {
      src:"/images/blog/blog-03.png",
      alt: ""
    },
    href: "/blogs/blog-test",
    publishedAt: "1970-01-01",
  },
];