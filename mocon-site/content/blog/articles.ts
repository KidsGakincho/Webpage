import { Article } from "./article";

export const articles: Article = [
  {
    slug: "entry-2026-08-20",
    title: "Next.jsでmoconを作ってみた",
    category: ["Development"],
    description: "Next.jsを使った開発について紹介します。",
    day: "2026.08.20",
    resource: {
      src: "/images/article/entry-2026-08-20-hero.jpg",
      alt: "Next.jsを使った開発の見出し画像",
    },
    sections: [
      {
        id: "introduction",
        title: "はじめに",
        type: "introduction",
        content: [
          {
            type: "paragraph",
            text: "近年のコーポレイトサイトやブログなど、多くのWebページ制作でNext.jsが採用されています。Next.jsはReactをベースにしたJavaScriptフレームワークで、コンポーネントベースの効率的なWebサイト構築を可能にします。今回は、このNext.jsを活用して開発した「mocon」の制作事例を実際のコードや設計のポイントを交えてご紹介します。",
          }
        ]
      },
      {
        id: "component-layout",
        title: "コンポーネントを用いたページ設計",
        type: "section",
        content:[
          {
            type: "paragraph",
            text: "Next.jsはコンポーネントと呼ばれる部品を組み合わせてWebページを作ります。このブログのページではタイトルを構成する「ArticleHero」、ブログの本文を構成する「ArticleSection」、右側のリストを構成する「ArticleAside」で構成されています。また、この本ブログの文章も「はじめに」、「番号付きセクション」、「まとめ」のコンポーネントで構成されています。",
          }
        ]
      },
      {
        id: "common-component",
        title: "共通コンポーネントの作成",
        type: "section",
        content: [
          {
            type: "paragraph",
            text: "Webページのコンテンツを開発していく過程で、コンポーネントに汎用性を持たせることを意識しました。例えば、BlogやWorksの一覧ページでは上部の見出しと記事の一覧を表示するために、これらの部品を共通コンポーネントにしています。共用することができるコンポーネントを設計することで、コンテンツの表示やレイアウトを効率的に変更することができます。",
          }
        ]
      },
      {
        id: "extensibility-design",
        title: "拡張性を意識したデータセット",
        type: "section",
        content: [
          {
            type:"paragraph",
            text: "moconで公開しているコンテンツはコンポーネント上に情報をハードコーディングせず、専用のデータセットとして管理しています。ユーザーが特定のコンテンツをクリックするとデータセットが読み込まれ、コンポーネント上に表示されます。このような構造にすることで、ブログの更新や新たな制作物の追加などの新しい情報を簡単に追加することができます。"
          }
        ]
      },
      {
        id: "conclusion",
        title: "まとめ",
        type: "conclusion",
        content: [
          {
            type: "paragraph",
            text: "moconではコンテンツごとの共通点から専用のコンポーネントを設計して、必要に応じて使いまわせるようにしました。コンテンツのデータを個別に管理することで、新しい情報を追加しやすい構造を目指しました。"
          }
        ]
      }
    ],
    tags: ["Next.js", "React", "TypeScript"]
  },
  {
    slug: "entry-2026-08-24",
    title: "Webデザインで大切にしたいこと",
    category: ["Design"],
    description: "Webデザインを作るうえで意識していることや、ユーザーに届けるための考え方をまとめました。",
    day: "2026.08.24",
    resource: {
      src: "",
      alt: "",
    },
    sections: [
      {
        id: "introduction",
        title: "はじめに",
        type: "introduction",
        content: [
          {
            type: "paragraph",
            text: "Webページを作成するうえでデザインは大切な要素だと考えています。凝ったレイアウトのページを作成しても、アリの行列のような小さな文字が羅列されていたり、とても直視できない配色がふんだんに使われていたりすると、訪問者の多くはそのWebページを表示したブラウザのタブをすぐに閉じてしまうでしょう。本記事では私がWebデザインをする際に意識していることについて紹介します。",
          },
        ]
      },
      {
        id: "content-navigation",
        title: "導線を意識する",
        type: "section",
        content: [
          {
            type: "paragraph",
            text: "私たちがWebページにアクセスしたときに何かしらの興味を引かれるポイントがあります。例えば、オンラインショッピングのECサイトでは現在開催されているキャンペーンやおすすめの商品などを、とりあえず選択した経験が一度はあると思います。過去に開発したNEXUSやmoconなどのウェブサイトでは、アクセスした人の興味を引く見出しを配置し、次に補足するコンテンツを順に配置するといった導線を意識しています。",
          },
        ]
      },
      {
        id: "keep-consistency",
        title: "情報の一貫性を保つ",
        type: "section",
        content: [
          {
            type: "paragraph",
            text: "Webページのコンテンツは一貫性を保つことを意識しています。一貫性の一例として、moconのWorksでは過去に開発したコンテンツの紹介にとどめ、技術的な話題といった関係の無い情報を含まないようにしています。そのような構成にすることでコンテンツの情報量を最低限に抑え、利用者に効果的に伝えられると考えています。",
          },
        ]
      },
      {
        id: "use-color",
        title: "色を活用する",
        type: "section",
        content: [
          {
            type: "paragraph",
            text: "導線と少し被るのですが色を効果的に用いることで興味を引くようにしています。ページ上部に表示されているコンテンツのナビゲーションの「CONTACT」だけを色つきのボタンにすることで、Webデザインを依頼できることを強調します。他にもセクションごとの文字には色を設定し、補足的な情報は色味を抑えることで見た目上の情報が増え過ぎないようにしています。",
          },
        ]
      },
      {
        id: "conclusion",
        title: "まとめ",
        type: "conclusion",
        content: [
          {
            type: "paragraph",
            text: "私はWebデザインをするうえで利用者にコンテンツを見るための導線を作り、情報の一貫性を保つことで見た人に情報を効果的に伝えます。また、色を的確に活用することで注目して欲しいポイントや補足的な情報などが直感的にわかるようにしています。",
          },
        ]
      }
    ],
    tags: ["UI/UX", "Design"]
  },
  {
    slug: "entry-2026-08-27",
    title: "仕事をもっと楽しくするために",
    category: ["Life"],
    description: "日々の仕事の中で意識していることや、モチベーションを保つための工夫について書きました。",
    day: "2026.08.27",
    resource: {
      src: "",
      alt: "",
    },
    sections: [
      {
        id: "introduction",
        title: "はじめに",
        type: "introduction",
        content: [
          {
            type: "paragraph",
            text: "仕事に取り組むうえで最も重要なのはモチベーションを保つことではないでしょうか。やる気がなければ仕事は進みませんし、騙し騙しでなんとか成し遂げたものも後から見れば頭を抱えたくなるような状態に…。今回は作業を進めるうえで私がモチベーションを保つ方法について書き綴っていきます。",
          }
        ]
      },
      {
        id: "imagine-the-goal",
        title: "完成形を常に想像し続ける",
        type: "section",
        content: [
          {
            type: "paragraph",
            text: "本文",
          }
        ]
      },
      {
        id: "plant",
        title: "のんびりと植物を眺める",
        type: "section",
        content: [
          {
            type: "paragraph",
            text: "本文",
          }
        ]
      },
      {
        id: "sleep",
        title: "いっそのこと仮眠をとる",
        type: "section",
        content: [
          {
            type: "paragraph",
            text: "本文",
          }
        ]
      },
      {
        id: "conclusion",
        title: "まとめ",
        type: "conclusion",
        content: [
          {
            type: "paragraph",
            text: "本文",
          }
        ]
      }
    ],
    tags: ["Life", "Work"]
  },
  {
    slug: "entry-2026-09-04",
    title: "Webサービスを作るということ",
    category: ["Other"],
    description: "サービスの開発で感じたことを紹介します。",
    day: "2026.09.04",
    resource: {
      src: "",
      alt: "",
    },
    sections: [
      {
        id: "",
        title: "",
        type: "",
        content: [
          {
            type: "",
            text: "",
          }
        ]
      }
    ],
    tags: []
  },
];