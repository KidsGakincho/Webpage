export type WorkList = {
  id: string;
  category: ["Web Site" | "App" | "System"];
  title: string;
  description: string;
  resource: {
    src: string,
    alt: string,
  };
  slug: string;
}