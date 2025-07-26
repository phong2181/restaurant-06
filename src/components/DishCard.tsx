import { useState } from "react";
import { Dish } from "../types/Dish";
import { Eye, EyeOff } from "lucide-react";

export default function DishCard({ dish }: { dish: Dish }){
    const [showDetails, setShowDetails] = useState(false);
    return(
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="relative h-48">
        <img 
          src={dish.image} 
          alt={dish.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full font-semibold">
          ฿{dish.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-900 mb-1">{dish.name}</h3>
        <p className="text-amber-700 text-sm mb-3 italic">{dish.nameThai}</p>
        <p className="text-gray-700 mb-4 leading-relaxed">{dish.description}</p>
        
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-2 text-amber-600 hover:text-amber-800 transition-colors duration-200 font-medium"
        >
          {showDetails ? <EyeOff size={16} /> : <Eye size={16} />}
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>
        
        {showDetails && (
          <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200 animate-fadeIn">
            <h4 className="font-semibold text-amber-900 mb-2">Ingredients:</h4>
            <p className="text-gray-700 text-sm leading-relaxed">{dish.ingredients}</p>
          </div>
        )}
      </div>
    </div>
    )
}