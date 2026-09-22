export type HeroData = {
  description?: string;
  image?: string;
  imageAlt?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
};

export const heroData: HeroData = {
  description: "アイデアとデザインの力で、人の心を動かすコンテンツをつくります。",

  image: "/images/hero/hero-illustration.png",

  imageAlt: "moconのサービスイメージ",

  primaryAction: {
    label: "私たちのサービス",
    href: "/services",
  },
};