import { CorporateContent } from "@/types/corporateContent";

export const corporateContents: CorporateContent[] = [
  {
    number: "01", 
    title: "Overview",
    subtitle: "プロジェクトの概要",
    type: "overview",
    details: `moconのコーポレートサイトは、サービスや想いをわかりやすく伝え、採用やお問い合わせにつながることを目的に制作しました。シンプルで親しみやすいデザインと、直接的に操作できるUIを意識し、訪問者が必要な情報にすぐにアクセスできる構成を採用しています。`,
  },
  {   
    number: "02", 
    title: "Design",
    subtitle: "デザインについて",
    type: "design",
    details: `「やさしさ」や「わくわく」そして「親しみやすさ」をテーマに明るくカラフルなデザインを採用しました。
               イラストを効果的に使うことで、サービスの魅力や楽しさが伝わるように工夫しています。また、余白をしっかりと取ることで情報が整理され、見やすく伝わりやすいレイアウトを実現しました。`,
    resource: {
      src: "/images/works/corporate/corporate-design.png",
      alt: "moconのデザイン",
    },
  },
  {   
    number: "03", 
    title: "Development",
    subtitle: "開発について",
    type: "development",
    details: `Next.jsをベースにTypeScriptで型安全な開発を行いました。コンポーネントを細かく分割して再利用性を高め、CSS Moduleでスタイルを管理しています。
    また、画像の最適化やレスポンシブ対応など、パフォーマンスとユーザビリティにも配慮しました。`,
    resource: {
      src: "/images/works/corporate/corporate-libraries.png",
      alt: "使用した技術",
    }
  },
  {   
    number: "04", 
    title: "Gallery",
    subtitle: "その他の画面",
    type: "gallery",

    details: "",
    resources: [
      {
        src: "",
        alt: ""
      },
      {
        src: "",
        alt: ""
      },
      {
        src: "",
        alt: ""
      },
    ],
  }
];