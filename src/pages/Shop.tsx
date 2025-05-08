
import { useState, useEffect } from "react";
import { type Product } from "../types/Product";
import { fetchProducts } from "../services/products";
import { ProductCard } from "../components/ProductCard";

export const Shop = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-4">Loading products...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tienda</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};
