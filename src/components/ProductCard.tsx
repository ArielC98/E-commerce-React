import { useCartStore } from "../data/cart";
import { type Product } from "../types/Product";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <div className="flex justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-40 object-contain mb-2 rounded"
        />
      </div>
      <h3
        className="font-medium text-md truncate"
        title={product.title}
      >
        {product.title}
      </h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add to cart
      </button>
    </div>
  );
};
