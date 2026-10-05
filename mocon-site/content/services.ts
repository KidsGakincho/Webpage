export type Service = {
  id: string;
  title: string;
  description: string;
  resource: {
    src: string;
    alt: string;
  };
}[];

export const services: Service = [
  {
    id: "planning",
    title: "企画・戦略",
    description: "アイデアを形にする企画をご提案します。",
    resource: {
      src: "/images/service/service-planning.svg",
      alt: "サービスセクション  企画・戦略の画像"
    }
  },
  {
    id: "design",
    title: "デザイン",
    description: "伝わるデザインで魅力を引き出します。",
    resource: {
      src: "/images/service/service-design.svg",
      alt: "サービスセクション  デザインの画像"
    }
  },
  {
    id: "development",
    title: "開発",
    description: "使いやすいサイトやアプリを作ります。",
    resource: {
      src: "/images/service/service-develop.svg",
      alt: "サービスセクション  開発の画像"
    }
  },
  {
    id: "support",
    title: "運用・サポート",
    description: "公開後もサポートし、育てていきます。",
    resource: {
      src: "/images/service/service-support.svg",
      alt: "サービスセクション  運用・サポートの画像"
    }
  },
];