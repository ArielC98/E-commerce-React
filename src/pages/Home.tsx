import { useNavigate } from "react-router-dom";
import { categorySlugMap } from "../services/categorySlugMap";
import { CategoryIcon } from "../components/CategoryIcon"; // Asegúrate de importar correctamente el componente

export const Home = () => {
  const navigate = useNavigate();

  const categories = Object.entries(categorySlugMap); // [slug, name]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map(([slug, name]) => {
          const displayName = slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
            
          return (
            <div
              key={slug}
              onClick={() => navigate(`/shop/${slug}`)}
              className="bg-white rounded-xl p-4 shadow hover:bg-blue-50 hover:cursor-pointer transition text-center flex flex-col items-center gap-2"
            >
              <CategoryIcon catName={name} iconColor="blue" iconSize={32} />
              <h2 className="capitalize font-medium text-sm">{displayName}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
