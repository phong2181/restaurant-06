

export default function About(){
    return(
        <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Our Story & Atmosphere</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Traditional Thai House Experience</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Step into Baan Sabai and be transported to a traditional Thai wooden house, 
                  complete with dark teak wood walls, rattan furniture, and warm ambient lighting 
                  that creates the perfect atmosphere for an authentic dining experience.
                </p>
                <p>
                  Our interior features colorful silk cushions, hand-carved wooden panels with 
                  floral motifs, and hanging plants that bring the tropical outdoors inside. 
                  The open kitchen counter allows guests to watch our skilled chefs work their 
                  magic with traditional woks and clay pots.
                </p>
                <p>
                  Soft Thai instrumental music plays in the background, completing the relaxed, 
                  homey vibe that makes every meal feel like a special occasion.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-xl">
              <h4 className="text-xl font-bold text-amber-900 mb-4">Design Elements</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Dark teak wood walls with traditional Thai craftsmanship</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Rattan furniture and colorful silk cushions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Hand-carved wooden panels with floral motifs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Tropical plants and fresh flowers throughout</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Open kitchen with traditional cooking methods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}