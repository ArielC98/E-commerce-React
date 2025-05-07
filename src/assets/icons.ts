import {
  Monitor,
  Smartphone,
  Shirt,
  Gem,
  ShoppingBasket,
  Smile,
} from 'lucide-react';
import type { JSX } from 'react';

const categoryIcons: Record<string, JSX.Element> = {
  smartphones: <Smartphone size={32} />,
  laptops: <Monitor size={32} />,
  "men's clothing": <Shirt size={32} />,
  "women's clothing": <Gem size={32} />,
  groceries: <ShoppingBasket size={32} />,
  others: <Smile size={32} />,
};


export categoryIcons;