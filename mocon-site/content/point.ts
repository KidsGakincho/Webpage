export type Point = {
  id: string;
  section: string,
  description: string,
  resource: {
    src: string,
    alt: string
  },
}[];

export const point: Point = [
  {
    id: "01",
    section: "思いに寄り添う",
    description: "丁寧なコミュニケーションで、本当に必要なものをご提案します。",
    resource: {
      src: "/images/point/point1.png",
      alt: "思いに寄り添うポイントのイメージ画像"
    },
  },
  {
    id: "02",
    section: "わかりやすく伝える",
    description: "複雑な内容もシンプルに整理し、わかりやすくカタチにします。",
    resource: {
      src: "/images/point/point2.png",
      alt: "わかりやすく伝えるポイントのイメージ画像"
    },
  },
  {
    id: "03",
    section: "使いやすさを考える",
    description: "訪れた人にとって心地よく、使いやすい体裁をつくります。",
    resource: {
      src: "/images/point/point3.png",
      alt: "使いやすさを考えるポイントのイメージ画像"
    },
  },
  {
    id: "04",
    section: "成長につなげる",
    description: "公開前の運用や改善までサポートし、ビジネスの成長につなげます。",
    resource: {
      src: "/images/point/point4.png",
      alt: "成長につなげるポイントのイメージ画像"
    },
  }
];
