export type BlogList = {
  id: string;
  day: string;
  category: [
   "All" | 
   "Development" | 
   "Design" | 
   "Life" | 
   "Other"
  ];
  title: string;
  description: string;
  tag: string[];
  resource: {
    src: string;
    alt: string;
  };
  slug: string;
}[];

export const blogList: BlogList = [
  {
    id: "1",
    day: "2026.08.20",
    category: ["Development"],
    title: "Next.jsでmoconを作ってみた　～実装で感じたことと学び～",
    description: "moconの開発で使用したNext.jsについて、実際に実践してみて感じたことや、工夫したポイントを紹介します。",
    tag: [
      "Next.js", 
      "React", 
      "TypeScript"
    ],
    resource: {
      src: "/images/blog/blogList/bloglist-entry1.png",
      alt: ""
    },
    slug: "/blog/article/entry-2026-08-20",
  },
  {
    id: "2",
    day: "2026.08.24",
    category: ["Design"],
    title: "Webデザインで大切にしたいこと",
    description: "デザインを作るうえで意識していることや、ユーザーに届けるための考え方をまとめました。",
    tag: [
      "Desigh", 
      "UI/UX"
    ],
    resource: {
      src: "/images/blog/blogList/bloglist-entry2.png",
      alt: ""
    },
    slug: "/blog/article/entry-2026-08-24",
  },
  {
    id: "3",
    day: "2026.08.27",
    category: ["Life"],
    title: "仕事をもっと楽しくするために",
    description: "日々の仕事の中で意識していることや、モチベーションを保つための工夫について書きました。",
    tag: [
      "Life",
      "Work"
     ],
    resource: {
      src: "/images/blog/blogList/bloglist-entry3.png",
      alt: ""
    },
    slug: "/blog/article/entry-2026-08-27",
  },
  {
    id: "4",
    day: "2026.09.04",
    category: ["Other"],
    title: "Webサービスを作るということ",
    description: "サービスを開発する中で感じたことや、大切にしたい考え方についてまとめました。",
    tag: [
      "Development",
      "Product"
    ],
    resource: {
      src: "/images/blog/blogList/bloglist-entry4.png",
      alt: ""
    },
    slug: "/blog/article/entry-2026-09-04",
  },
  {
    id: "5",
    day: "2026.09.15",
    category: ["Development"],
    title: "Reactでのコンポーネント設計について",
    description: "再利用しやすく、保守性の高いコンポーネントを作るために指揮したポイントを紹介します。",
    tag: [
      "React",
      "Next.js"
    ],
    resource: {
      src: "/images/blog/blogList/bloglist-entry5.png",
      alt: ""
    },
    slug: "/blog/article/entry-2026-09-15",
  },
  {  
    id: "6",
    day: "2026.09.17",
    category: ["Other"],
    title: "ここにタイトルを入力する",
    description: "ここにブログの要点を書く",
    tag: [
      "ここに", 
      "タグを入力する"
    ],
    resource: {
      src: "/images/blog/blogList/bloglist-entry6.png",
      alt: ""
    },
    slug: "/blog/article/entry-2026-09-17",
  }
];