import { Product } from "@/types/product";

export const products: Product[] = [
    {
        id: "corporate-site",
        title: "Corporate Website",
        category: "Web Design",
        description: "企業のブランドイメージを表現したコーポレートサイト。",
        image: "/images/products/corporate_site.png",
        publishedAt: "2012-05-05",
        href: "/prpducts/corporate-site",
    },
    {
        id: "brand-site",
        title: "Brand Website",
        category: "Web Design",
        description: "ブランドの世界観を表現したWebサイト。",
        image: "/images/products/brand_site.png",
        publishedAt: "2015-05-05",
        href: "/prpducts/brand-site",    
    },
    {
        id: "app-uiux-01",
        title: "Mobile App UI/UX",
        category: "UI/UX Design",
        description: "ユーザー体験を重視したモバイルアプリのUI/UX。",
        image: "/images/products/app_uiux_design.png",
        publishedAt: "2017-05-05",
        href: "/products/app-uiux",
    },
    {
        id: "system",
        title: "Business System",
        category: "Development",
        description: "業務効率化を目的としたWebシステム。",
        image: "/images/products/business_system.png",
        publishedAt: "2019-05-05",
        href: "/products/system",
    },
];