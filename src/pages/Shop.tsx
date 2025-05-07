
import { useState, useEffect } from "react";
import { useCartStore } from "../data/cart";
import { type Product } from "../types/Product";
import { fetchProducts } from "../services/products";

export const Shop = () => {

  const addToCart = useCartStore((state) => state.addToCart);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-4">Cargando productos...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tienda</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex justify-center">
              <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-2 rounded" />
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
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Añadir al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
