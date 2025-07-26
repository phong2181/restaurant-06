import { ChefHat } from "lucide-react";


export default function Header(){
    return(
        <header className="bg-gradient-to-r from-amber-900 to-orange-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ChefHat className="h-8 w-8 text-amber-300" />
              <div>
                <h1 className="text-2xl font-bold">Baan Sabai Thai Kitchen</h1>
                <p className="text-amber-200 text-sm">บ้านสบายไทยคิทเช่น</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#menu" className="hover:text-amber-300 transition-colors">Menu</a>
              <a href="#about" className="hover:text-amber-300 transition-colors">About</a>
              <a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>
    )
}