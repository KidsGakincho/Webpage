type ArticleContent = 
| {
  type: "text";
  content: string;
}
| {
  type: "image";
  src: string;
  alt: string;
}
| {
  type: "heading";
  content: string;
};