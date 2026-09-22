import { Service } from "@/types/service";

export const services: Service[] = [
    {
        id: "planning",
        title: "企画・戦略",
        description: "アイデアを形にする企画をご提案します。",
        icon: "/images/service/service-planning.png",
    },
    {
        id: "design",
        title: "デザイン",
        description: "伝わるデザインで魅力を引き出します。",
        icon: "/images/service/service-design.png",
    },
    {
        id: "development",
        title: "開発",
        description: "使いやすいサイトやアプリを作ります。",
        icon: "/images/service/service-development.png",
    },
    {
        id: "support",
        title: "運用・サポート",
        description: "公開後もサポートし、育てていきます。",
        icon: "/images/service/service-support.png",
    },
];