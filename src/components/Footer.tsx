import { ChefHat } from "lucide-react";

export default function Footer(){
    return(
        <footer className="bg-amber-900 text-amber-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ChefHat className="h-6 w-6" />
            <span className="text-xl font-bold">Baan Sabai Thai Kitchen</span>
          </div>
          <p>&copy; 2025 Baan Sabai Thai Kitchen. All rights reserved.</p>
          <p className="mt-2">Authentic Thai cuisine in the heart of Bangkok</p>
        </div>
      </footer>
    )
}