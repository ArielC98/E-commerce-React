import { Smartphone, Monitor, Shirt, Gem, ShoppingBasket, Smile } from "lucide-react";
import type { JSX } from "react";
import { useCategories } from "../hooks/useCategories";
import { CategoryIcon } from '../components/CategoryIcon';


const categoryIcons: Record<string, JSX.Element> = {
  smartphones: <Smartphone size={32} />,
  laptops: <Monitor size={32} />,
  "men's clothing": <Shirt size={32} />,
  "women's clothing": <Gem size={32} />,
  groceries: <ShoppingBasket size={32} />,
  others: <Smile size={32} />,
};


export const Home = () => {

  const { categories, loading } = useCategories();

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Bienvenido a ReactCommerce</h1>
        <p className="text-gray-700">
          Este es un proyecto de eCommerce construido con React, Tailwind y TypeScript.
        </p>
      </div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Categories</h1>
        {<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map((cat) =>(
            
            <div
              key={cat.slug}
              className="flex flex-col justify-center items-center h-40 bg-white rounded-xl p-4 shadow hover:bg-blue-50 hover:cursor-pointer transition"
            >
              <div className="mb-2 text-blue-600">
                {/* {categoryIcons[cat.slug] || categoryIcons["others"]} */}
                <CategoryIcon catName={cat.name} iconColor="blue" iconSize={30}/>
              </div>
              <h2 className="text-center capitalize font-medium text-sm sm:text-base" title={cat.name}>
                {cat.name.length > 19 ? cat.name.slice(0, 18) + '…' : cat.name}
              </h2>
            </div>
          ))}
        </div>}
      </div>
    </div>
  )
}
