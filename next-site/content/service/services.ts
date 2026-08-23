import { Service } from "@/types/Service";

export const services: Service[] = [
    {
        id: "consulting",
        title: "戦略・コンサルティング",
        description: "ビジネスの成長に向けた戦略を設計します。",
        icon: "/images/services/consulting.png",
    },
    {
        id: "design",
        title: "デザイン",
        description: "ユーザー視点のデザインを提供します。",
        icon: "/images/services/design.png",
    },
    {
        id: "system",
        title: "開発・実装",
        description: "高品質なシステムを実現します。",
        icon: "/images/services/system.png",
    },
    {
        id: "improvement",
        title: "運用・改善",
        description: "継続的な改善で成果を最大化します。",
        icon: "/images/services/improvement.png",
    },
];