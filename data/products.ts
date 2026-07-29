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
    slug: "insulated-food-service-counter",
    category: "kitchen-appliances",
    name: "Insulated Food Service Counter",
    images:[ 
      "/images/IFS1.jpg",
      "/images/IFS2.jpg",
      "/images/IFS3.jpg",
    ],
    description:
      "Professional insulated food service counter designed to keep meals warm and ready for serving in restaurant, hotels, school, and catering businesses",
    badge: "New Arrival",
    moq: "200 Units",
    voltage: "N/A",
    capacity: "3-compartment(SUS304 stainless steel), 4-compartment(SUS304 stainless steel), 5-compartment(SUS304 stainless steel), 6-compartment(SUS304 stainless steel)",
    power: "N/A",
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
    slug: "knife-rest",
    category: "kitchen-appliances",
    name: "Kitchen Knife Rest",
    images:[
       "/images/SUS304.jpg",
       "/images/AS.jpg",
      ],
    description:
      "Modern kitchen knife rest designed to safely store and organize knives while keeping your kitchen clean and stylish.",
    badge: "New Arrival",
    moq: "100 Units",
    material: "Stainless Steel",
    capacity: "N/A",
    certification: "CE / RoHS",
  },
  {
    slug: "bbq-grill",
    category: "kitchen-appliances",
    name: "Portable Charcoal BBQ Grill",
    images: ["/bbqaw.jpg"],
    description:
      "Portable charcoal BBQ grill with foldable legs and a built-in seasoning plate for easy outdoor cooking.",
    badge: "New Arrival",
    moq: "100 Units",
    material: "Stainless Steel",
    fuelType: "Charcoal",
    cookingArea: "73 × 33 cm",
    dimensions: "71 × 33 × 71 cm",
    weight: "6.5 kg",
    color: "Silver",
    assembly: "Easy Assembly",
    cleaning: "Removable Ash Tray",
    certification: "CE",
    warranty: "12 Months",
    oem: "OEM & ODM Available",
  }

];
