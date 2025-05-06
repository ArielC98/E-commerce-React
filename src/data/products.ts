export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Camiseta React",
    price: 25.99,
    image: "https://via.placeholder.com/300x200?text=React+Tshirt",
  },
  {
    id: 2,
    name: "Taza JavaScript",
    price: 14.5,
    image: "https://via.placeholder.com/300x200?text=JS+Mug",
  },
  {
    id: 3,
    name: "Sticker TypeScript",
    price: 4.99,
    image: "https://via.placeholder.com/300x200?text=TS+Sticker",
  },
];
