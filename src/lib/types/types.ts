export interface PLItem {
  title: string;
  thumbnail: string;
  description: string;
  links: {
    type: string;
    link: string;
  }[];
  tags: string[];
  ongoing: boolean;
}
