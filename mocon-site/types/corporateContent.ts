export type CorporateContent = {
  number: string;
  title: string;
  subtitle: string;
  type: "overview" | "design" | "development" | "gallery";
  details?: string;
  resource?: {
    src: string;
    alt: string;
  };
  resources?: {
    src: string;
    alt: string;
  }[];
};