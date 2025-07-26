import { Star } from "lucide-react";



export default function Hero(){
    return(
        <section className="relative h-96 bg-gradient-to-r from-amber-900 to-orange-900 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-center z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4">Welcome to Baan Sabai</h2>
          <p className="text-xl mb-6 leading-relaxed">"Cozy Thai House" - Where Traditional Flavors Meet Modern Comfort</p>
          <p className="text-lg text-amber-200 max-w-2xl mx-auto leading-relaxed">
            Experience authentic Thai cuisine in a warm, inviting atmosphere that feels like home. 
            Fresh local herbs, traditional recipes, and the vibrant spirit of Thai street food.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Star className="h-5 w-5 text-amber-300 fill-amber-300" />
            <Star className="h-5 w-5 text-amber-300 fill-amber-300" />
            <Star className="h-5 w-5 text-amber-300 fill-amber-300" />
            <Star className="h-5 w-5 text-amber-300 fill-amber-300" />
            <Star className="h-5 w-5 text-amber-300 fill-amber-300" />
            <span className="ml-2 text-amber-200">Authentic Thai Experience</span>
          </div>
        </div>
      </section>
    )
}