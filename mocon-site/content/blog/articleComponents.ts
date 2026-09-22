import { NextjsArticle } from "@/components/sections/blog/articles/NextjsArticle";
import { DesignArticle } from "@/components/sections/blog/articles/DesignArticle";
import React from "react";

export const articleComponents: Record<string, React.ComponentType> = {
  "entry-2026-08-20": NextjsArticle,
  "entry-2026-08-24": DesignArticle,
}