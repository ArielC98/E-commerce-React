import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { type Product } from "../types/Product";
import { fetchProducts } from "../services/products";
import { ProductCard } from "../components/ProductCard";
import { categorySlugMap } from "../services/categorySlugMap";

export const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryName = categorySlugMap[category ?? ""] ?? "";

  useEffect(() => {
    fetchProducts()
      .then((allProducts: Product[]) => {
        const filtered = allProducts.filter(
          (product) =>
            product.category.toLowerCase() === categoryName.toLowerCase()
        );
        setProducts(filtered);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [categoryName]);

  if (!category) return <p className="text-center">Invalid Category</p>;

  if (loading) return <p className="text-center mt-4">Loading products...</p>;

  const formattedCategory = category
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 capitalize">
        Category: {formattedCategory}
      </h1>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">There are no products in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
