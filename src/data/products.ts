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
    image: "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C61mhZpFV0YL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
  },
  {
    id: 2,
    name: "Taza JavaScript",
    price: 14.5,
    image: "https://http2.mlstatic.com/D_NQ_NP_650609-MLA71986352883_092023-O.webp",
  },
  {
    id: 3,
    name: "Gorra TypeScript",
    price: 4.99,
    image: "https://ih1.redbubble.net/image.4859609249.2478/ssrco,dad_hat,product,FFFDF5:8c3db69414,front_three_quarter,square,1000x1000-bg,f8f8f8.jpg",
  },
];
