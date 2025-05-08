import { Home, ShoppingBag, ShoppingCart } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-600">My eCommerce</h1>
          <ul className="flex justify-center gap-8 items-center">
            <li>
              <Link to="/" className="flex flex-col items-center hover:text-blue-600 transition">
                <Home size={20} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/shop" className="flex flex-col items-center hover:text-blue-600 transition">
                <ShoppingBag size={20} />
                <span>Shop</span>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="flex flex-col items-center hover:text-blue-600 transition">
                <ShoppingCart size={20} />
                <span>Cart</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Contenido de la página */}
      <main className="flex-1 container mx-auto p-4">
        {children ?? <Outlet />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 mt-8 text-gray-600">
        © 2025 My eCommerce. All rights reserved.
      </footer>
    </div>
  )
}
