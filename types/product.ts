export interface Product {
  name: string;
  slug: string;
  category: string;

  images: string[];

  video?: string;

  description: string;

  badge?: string;
  moq?: string;

  voltage?: string;
  capacity?: string;
  power?: string;

  material?: string;
  fuelType?: string;
  cookingArea?: string;
  dimensions?: string;
  weight?: string;
  color?: string;

  assembly?: string;
  cleaning?: string;

  certification?: string;
  warranty?: string;
  oem?: string;
}