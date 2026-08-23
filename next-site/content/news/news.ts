export type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  href: string;
};

export const newsItems: NewsItem[] = [
  {
    id: "website-renewal",
    date: "2026.08.20",
    category: "NEWS",
    title: "Webサイトをリニューアルしました。",
    href: "/news/website-renewal",
  },
  {
    id: "new-works",
    date: "2026.08.05",
    category: "WORKS",
    title: "新しい制作実績を追加しました。",
    href: "/news/new-works",
  },
  {
    id: "service-update",
    date: "2026.07.12",
    category: "NEWS",
    title: "サービス内容を更新しました。",
    href: "/news/service-update",
  },
];