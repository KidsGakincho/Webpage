export type ProcessItem = {
  number: string;
  title: string;
  description: string;
};

export const processItems: ProcessItem[] = [
  {
    number: "01",
    title: "HEARING",
    description:
      "現在の課題や目的、実現したいことを丁寧にヒアリングします。",
  },
  {
    number: "02",
    title: "PLANNING",
    description:
      "ヒアリング内容をもとに、企画や構成、必要な機能を設計します。",
  },
  {
    number: "03",
    title: "DESIGN",
    description:
      "ユーザー体験を考慮しながら、UIやビジュアルをデザインします。",
  },
  {
    number: "04",
    title: "DEVELOPMENT",
    description:
      "設計・デザインをもとに開発を行い、品質を確認しながら仕上げます。",
  },
  {
    number: "05",
    title: "RELEASE",
    description:
      "完成したサービスを公開し、必要に応じて運用・改善までサポートします。",
  },
];