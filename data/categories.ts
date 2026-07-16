export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  {
    slug: "kitchen-appliances",
    name: "Kitchen Appliances",
    description:
      "Premium kitchen appliances for homes, hotels and restaurants.",
    image: "/images/categories/kitchen-appliances.jpg",
  },
  {
    slug: "home-appliances",
    name: "Home Appliances",
    description:
      "Reliable electrical appliances for everyday living.",
    image: "/images/categories/home-appliances.jpg",
  },
  {
    slug: "commercial-equipment",
    name: "Commercial Equipment",
    description:
      "Professional equipment for businesses and wholesalers.",
    image: "/images/categories/commercial-equipment.jpg",
  },
  {
    slug: "electronics",
    name: "Electronics",
    description:
      "Quality electronic products for international distribution.",
    image: "/images/categories/electronic.jpg",
  },
];