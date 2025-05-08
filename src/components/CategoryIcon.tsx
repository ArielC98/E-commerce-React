import { DynamicIcon } from "lucide-react/dynamic";
import { useMemo } from "react";

// Define los íconos válidos de Lucide
type LucideIconName =
  | "wand" | "milk" | "sofa" | "apple" | "lamp" | "cooking-pot" | "laptop"
  | "shirt" | "plane-landing" | "timer" | "smartphone-charging" | "bike"
  | "smile" | "smartphone" | "dumbbell" | "glasses" | "tablet" | "car"
  | "briefcase-business" | "tree-pine" | "gem" | "footprints" | "watch";

// Mapea cada categoría a su icono
const categoryIcons: Record<string, LucideIconName> = {
  "Beauty": "wand",
  "Fragances": "milk",
  "Furniture": "sofa",
  "Groceries": "apple",
  "Home Decoration": "lamp",
  "Kitchen Accesories": "cooking-pot",
  "Laptops": "laptop",
  "Mens Shirts": "shirt",
  "Mens Shoes": "plane-landing",
  "Mens Watches": "timer",
  "Mobile Accesories": "smartphone-charging",
  "Motorcycle": "bike",
  "Skin Care": "smile",
  "Smartphones": "smartphone",
  "Sports Accessories": "dumbbell",
  "Sunglasses": "glasses",
  "Tablets": "tablet",
  "Tops": "shirt",
  "Vehicle": "car",
  "Womens Bags": "briefcase-business",
  "Womens Dresses": "tree-pine",
  "Womens Jewerlly": "gem",
  "Womens Shoes": "footprints",
  "Womens Watches": "watch",
};

interface Props {
  catName: string;
  iconSize?: number;
  iconColor?: string;
}

export const CategoryIcon = ({ catName, iconSize = 30, iconColor = 'blue' }: Props) => {
  const icon = useMemo(() => {
    return Object.prototype.hasOwnProperty.call(categoryIcons, catName)
      ? categoryIcons[catName as keyof typeof categoryIcons]
      : "smile";
  }, [catName]);

  return <DynamicIcon name={icon} size={iconSize} color={iconColor} />;
};
