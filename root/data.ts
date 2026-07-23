// lib/data.ts

import type { Category, Product } from "./types";

// Sample categories
export const categories: Category[] = [
  {
    slug: "bbq",
    name: "BBQ Grills",
    description: "High-quality barbecue grills for outdoor cooking.",
  },
  {
    slug: "smokers",
    name: "Smokers",
    description: "Wood and electric smokers for slow-cooked perfection.",
  },
];

// Sample products
const allProducts: Product[] = [
  {
    id: "1",
    name: "Premium Gas BBQ",
    slug: "premium-gas-bbq",
    image: "/bbq1.jpg",
    price: 599,
    description: "Powerful 4-burner gas grill with side burner and rotisserie.",
    category: "BBQ Grills",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Electric Smoker",
    slug: "electric-smoker",
    image: "/smoker1.jpg",
    price: 299,
    description: "Digital-controlled electric smoker with 6 racks.",
    category: "Smokers",
  },
];

// Function to get products by category name
export function getProductsByCategory(categoryName: string): Product[] {
  return allProducts.filter((product) => product.category === categoryName);
}
