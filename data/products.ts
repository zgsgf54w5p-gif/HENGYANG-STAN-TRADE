import {Product} from "../types/product";

export const products : Product[]= [
  {
    slug: "air-fryer",
    category: "kitchen-appliances",
    name: "Digital Air Fryer",
    images:[ "/images/airfryer.jpg"],
    description:
      "Premium oil-free digital air fryer designed for households and distributors.",
    badge: "Best Seller",
    moq: "100 Units",
    voltage: "110V / 220V",
    capacity: "8 Liters",
    power: "1800W",
    certification: "CE / RoHS",
  },

  {
    slug: "electric-kettle",
    category: "kitchen-appliances",
    name: "Electric Kettle",
    images:[ "/images/boulloir.jpg"],
    description:
      "Fast boiling electric kettle with modern stainless steel design.",
    badge: "New Arrival",
    moq: "200 Units",
    voltage: "110V / 220V",
    capacity: "2 Liters",
    power: "1500W",
    certification: "CE / RoHS",
  },

  {
    slug: "coffee-machine",
    category: "kitchen-appliances",
    name: "Coffee Machine",
    images:[ "/images/cafetiere.jpg"],
    description:
      "Professional coffee machine for homes, hotels and offices.",
    badge: "Premium",
    moq: "50 Units",
    voltage: "220V",
    capacity: "1.5 Liters",
    power: "1200W",
    certification: "CE",
  },

  {
    slug: "rice-cooker",
    category: "kitchen-appliances",
    name: "Rice Cooker",
    images:[ "/images/ricecooker.jpg"],
    description:
      "Automatic rice cooker with keep-warm technology.",
    badge: "Top Rated",
    moq: "150 Units",
    voltage: "220V",
    capacity: "5 Liters",
    power: "900W",
    certification: "CE",
  },
  {
  slug: "bbq-grill",
  category: "kitchen-appliances",
  name: "Portable Detachable Charcoal BBQ Grill",
  images: ["/images/BBq1.jpg"],
  video: "/videos/BBqv.mp4",
  description:
    "High-quality portable BBQ grill designed for outdoor cooking, camping, picnics, and commercial use.",
  badge: "New Arrival",
  moq: "100 Units",
  material: "Stainless Steel",
  fuelType: "Charcoal",
  cookingArea: "45 × 30 cm",
  dimensions: "60 × 35 × 70 cm",
  weight: "5.8 kg",
  color: "Grey",
  assembly: "Easy Assembly",
  cleaning: "Removable Ash Tray",
  certification: "CE",
  warranty: "12 Months",
  oem: "OEM & ODM Available",
}
];