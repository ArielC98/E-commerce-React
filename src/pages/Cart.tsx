

import { useCartStore } from "../data/cart";

export const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your shopping cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b pb-2">
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">Amount: {item.quantity}</p>
                  <p className="text-gray-600">
                    Total price: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Empty cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};
