import {
  Monitor,
  Smartphone,
  Shirt,
  Gem,
  ShoppingBasket,
  Smile,
  Pizza,
} from 'lucide-react';
import type { JSX } from 'react';


export const categoryIcons: Record<string, JSX.Element> = {
  smartphones: <Smartphone size={32} />,
  laptops: <Monitor size={32} />,
  "men's clothing": <Shirt size={32} />,
  "women's clothing": <Gem size={32} />,
  groceries: <ShoppingBasket size={32} />,
  food: <Pizza size={32}/>,
  // Agrega más categorías aquí según sea necesario
};

export const defaultCategoryIcon = <Smile size={32} />;
