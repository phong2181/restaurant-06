import { dishes } from "../Data/menuData";
import DishCard from "./DishCard";


export default function Menu(){
    return(
        <section id="menu" className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Signature Menu</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Each dish celebrates vibrant street food classics and comforting family recipes, 
              made with fresh local herbs and spices.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {dishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </div>
      </section>
    )
}