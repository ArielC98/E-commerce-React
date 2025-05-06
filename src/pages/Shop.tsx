
import { products, type Product } from "../data/products";

export const Shop = () => {
  function addToCart(product: Product): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tienda</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
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
