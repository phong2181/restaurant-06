import { Clock, MapPin, Phone, Utensils } from "lucide-react";


export default function Contact(){
    return(
        <section id="contact" className="py-16 bg-gradient-to-r from-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Baan Sabai</h2>
            <div className="w-24 h-1 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-xl text-amber-200 leading-relaxed">
              Experience the warmth of Thai hospitality and the authentic flavors of Thailand
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 text-amber-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-amber-200 leading-relaxed">
                123 Sukhumvit Road<br />
                Bangkok, Thailand 10110
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Phone className="h-12 w-12 text-amber-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Reservations</h3>
              <p className="text-amber-200 leading-relaxed">
                +66 (0) 2-123-4567<br />
                info@baansabai.co.th
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-amber-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Hours</h3>
              <p className="text-amber-200 leading-relaxed">
                Mon - Sun: 11:00 AM - 10:00 PM<br />
                Kitchen closes at 9:30 PM
              </p>
            </div>
          </div>

          <div className="text-center mt-12 p-8 bg-black/20 rounded-xl">
            <Utensils className="h-16 w-16 text-amber-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">The Baan Sabai Experience</h3>
            <p className="text-lg text-amber-200 max-w-3xl mx-auto leading-relaxed">
              At Baan Sabai, guests are welcomed into a warm, inviting space that feels like a traditional Thai home. 
              The smell of sizzling stir-fries and fragrant herbs fills the air as our chefs work their woks behind 
              an open counter. Our friendly staff is ready to recommend the perfect pairing of drinks and side dishes 
              to complete your authentic Thai dining experience.
            </p>
          </div>
        </div>
      </section>
    )
}