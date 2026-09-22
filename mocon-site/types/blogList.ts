export type BlogList = {
  id: string;
  day: string;
  category: [
   "All" | 
   "Development" | 
   "Design" | 
   "Life" | 
   "Other"
  ];
  title: string;
  description: string;
  tag: string[];
  resource: {
    src: string;
    alt: string;
  };
  slug: string;
};