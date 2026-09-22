export type Works = {
  title: string;
  description: string;
  tag: string[];
  resource: {
    src: string;
    alt: string;
  };
  slug: string;
};

export const Works: Works[] = [
  {
    title: "Webサイト",
    description: "mocon コーポレートサイト制作",
    tag: [
      "#Webサイト", 
      "#コーポレート"
    ],
    resource: {
      src: "/images/works/works-01.png",
      alt: "moconコーポレイトサイト用の画像"
    },
    slug: "/works/worklist/website/",
  },
  {
    title: "アプリ・UI/UX",
    description: "アプリUI/UXデザイン",
    tag: [
      "#アプリ",
      "#UI/UX"
    ],
    resource: {
      src: "/images/works/works-02.png",
      alt: "アプリUI/UXデザインの画像"
    },
    slug: "/works/design/",
  },
  {
    title: "ブランディング",
    description: "ブランドサイト制作",
    tag: [
      "#ブランディング", 
      "#Webサイト"
    ],
    resource: {
      src: "/images/works/works-03.png",
      alt: "Natureサイトの画像"
    },
    slug: "/works/branding/",
  },
  {
    title: "システム開発",
    description: "業務システム開発",
    tag: [
      "#システム開発",
      "#Webアプリ"
    ],
    resource: {
      src: "/images/works/works-04.png",
      alt: "業務システムの画像"
    },
    slug: "/works/system/",
  },
    {
    title: "タイトル",
    description: "説明",
    tag: [
      "#タグ１",
      "#タグ２"
    ],
    resource: {
      src: "/images/works/works-04.png",
      alt: "業務システムの画像"
    },
    slug: "/works/system/",
  },
];