export type Article = {
  slug: string;
  title: string;
  description: string;
  category: [
    "All" | 
    "Development" | 
    "Design" | 
    "Life" | 
    "Other"
  ];
  day: string;
  resource: {
    src: string;
    alt: string;
  };
  sections: {
    id: string;
    title: string;
    type: string;
    content: {
      type: string;
      text: string;
    }[];
  }[];
  tags: string[];
};

export type ArticleProps = {
  article: Article;
  tags: string[];
};

export type ArticleSectionsProps = {
  sections: {
  id: string;
  title: string;
  type: string;
  content: {
    type: string;
    text: string;
    }[];
  }[];
}

export type ArticleNormalSectionProps = {
  id: string;
  title: string;
  type: string;
  content: {
    type: string;
    text: string;
  }[];
  index: number;
}

export type ArticleSectionProps = {
  id: string;
  title: string;
  type: string;
  content: {
    type: string;
    text: string;
  }[];
}

export type ArticleAsideProps = {
  sections: {
  id: string;
  title: string;
  type: string;
  content: {
    type: string;
    text: string;
    }[];
  }[];
  tags: string[];  
}

export type ArticleTagProps = {
  tags: string[];
}