export interface CarouselDataItem {
  id: string;
  title: string;
  tags: string[];
  image: string;
  offers: Offer[];
}

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
}

export interface CardProps {
  data: {
    id: string;
    title: string;
    tags: string[];
    image: string;
    offers: Offer[];
  };
}
