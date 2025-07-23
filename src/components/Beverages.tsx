import { beverages } from "../Data/beverages";



export default function Beverages(){
    return(
        <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Refreshing Beverages</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beverages.map((beverage, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-amber-900 mb-2">{beverage.name}</h3>
                <p className="text-2xl font-bold text-amber-600">฿{beverage.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    )
}