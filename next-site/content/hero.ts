export type HeroData = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
};

export const heroData: HeroData = {
  eyebrow: "DESIGN & TECHNOLOGY",

  title: "Create something new.",

  description: "デザインとテクノロジーで、新しい価値を創造します。",

  image: "/images/hero/interior.png",

  imageAlt: "〇✕△☆のサービスイメージ",

  primaryAction: {
    label: "VIEW WORKS",
    href: "/works",
  },

  secondaryAction: {
    label: "CONTACT",
    href: "/contact",
  },
};