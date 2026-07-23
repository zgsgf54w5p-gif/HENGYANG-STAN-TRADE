export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  description: string;
  category: string;
  badge?: string;
};