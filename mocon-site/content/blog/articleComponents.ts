import React from "react";
import { NextjsArticle } from "@/components/sections/blog/articles/NextjsArticle";
import { DesignArticle } from "@/components/sections/blog/articles/DesignArticle";
import { MotivationArticle } from "@/components/sections/blog/articles/MotivationArticle";
import { ArticleProps } from "./article";

export const articleComponents: Record<string, React.ComponentType<ArticleProps>> = {
  "entry-2026-08-20": NextjsArticle,
  "entry-2026-08-24": DesignArticle,
  "entry-2026-08-27": MotivationArticle,
}