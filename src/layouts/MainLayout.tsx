import type { ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

export const MainLayout = ({children}: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-600">Mi eCommerce</h1>
          <ul className="flex space-x-4 text-lg">
            <li><Link to="/" className="hover:text-blue-600">Inicio</Link></li>
            <li><Link to="/shop" className="hover:text-blue-600">Tienda</Link></li>
            <li><Link to="/cart" className="hover:text-blue-600">Carrito</Link></li>
          </ul>
        </nav>
      </header>

      {/* Contenido de la página */}
      <main className="flex-1 container mx-auto p-4">
        {children ?? <Outlet/>}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 mt-8 text-gray-600">
        © 2025 Mi eCommerce. Todos los derechos reservados.
      </footer>
    </div>
  )
}
