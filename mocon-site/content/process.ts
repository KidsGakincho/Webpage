export type Process = {
  id: string;
  process: string;
  description: string;
  resource: {
    src: string;
    alt: string;
  },
  variant: string;
}[];

export const process: Process = [
  {
    id: "01",
    process: "ヒアリング",
    description: "お悩みやご要望を丁寧にお伺いし、課題や目的を整理します。",
    resource:{
      src: "/images/process/step1-hearing.png",
      alt: "プロセス１、ヒアリングの画像",
    },
    variant: "step01",
  },
  {
    id: "02",
    process: "企画・設計",
    description: "目的に合わせた企画を行い、サイトの構成や設計を行います。",
    resource: {
      src: "/images/process/step2-planning.png",
      alt: "プロセス２、企画・設計の画像"
    },
    variant: "step02",
  },
  {
    id: "03",
    process: "デザイン",
    description: "ブランドイメージを大切にしながら、使いやすく魅力的なデザインを制作します。",
    resource: {
      src: "/images/process/step3-design.png",
      alt: "プロセス３、デザインの画像"
    },
    variant: "step03",
  },
  {
    id: "04",
    process: "開発",
    description: "高品質なコーディングで快適に使えるWebサイトを構築します。",
    resource: {
      src: "/images/process/step4-develop.png",
      alt: "プロセス４、開発の画像"
    },
    variant: "step04",
  },
  {
    id: "05",
    process: "公開・サポート",
    description: "公開後も運用や改善のサポートを行い、成果につなげていきます。",
    resource: {
      src: "/images/process/step5-support.png",
      alt: "プロセス５、公開・サポートの画像"
    },
    variant: "step05",
  }
];