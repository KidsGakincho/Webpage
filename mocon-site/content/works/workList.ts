export type WorkList = {
  id: string;
  category: ["Web Site" | "App" | "System"];
  title: string;
  description: string;
  resource: {
    src: string,
    alt: string,
  };
  slug: string;
}[];

export const workList: WorkList = [
  {
    id: "1",
    resource: {
      src: "/images/works/worklist/works-corporate-site.png",
      alt: ""
    },
    title: "mocon コーポレートサイト",
    description: "サービスや想いをわかりやすく伝え、採用やお問い合わせにつながることを目的に制作しました。",
    category: ["Web Site"],
    slug: "/works/worklist/website/"
  },
  {
    id: "2",
    resource: {
      src: "/images/works/worklist/works-nexus.png",
      alt: ""
    },
    title: "NEXUS",
    description: "",
    category: ["App"],
    slug: "/works/worklist/website/",
  },
  {
    id: "3",
    resource: {
      src: "/images/works/worklist/works-drawing-app.png",
      alt: ""
    },
    title: "まだ決めてない",
    description: "データセットから編集可能な図を表示するアプリを開発する予定。",
    category: ["App"],
    slug: "/works/worklist/website/"
  },
  {
    id: "4",
    resource: {
      src: "/images/works/worklist/works-portal-system.png",
      alt: ""
    },
    title: "Nature コーポレイトサイト",    
    description: "自然の恵みを生かした製品の紹介用ページを作成しました。",
    category: ["Web Site"],  
    slug: "/works/worklist/website/"
  },
  {
    id: "5",
    resource: {
      src: "/images/works/worklist/works-data-platform.png",
      alt: ""
    },
    title: "データプラットフォーム",
    description: "企業のデータ活用を支援するプラットフォームのUI/UXデザイン・開発を担当する予定",
    category: ["Web Site"],
    slug: "/works/worklist/website/"
  },
  {
    id: "6",
    resource: {
      src: "/images/works/worklist/works-recruit-site.png",
      alt: ""
    },
    title: "Title",
    description: "Description",
    category: ["Web Site"],
    slug: "/works/worklist/website/"
  },
];