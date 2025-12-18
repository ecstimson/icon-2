import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, Info, ShieldCheck } from 'lucide-react';
import { FLEET } from '../constants';
import Button from '../components/ui/Button';

const Fleet: React.FC = () => {
  return (
    <div className="pt-20">
      
      {/* Hero */}
      <div className="bg-white py-24 lg:py-32 px-6 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto text-center">
           <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase block mb-6">Our Collection</span>
           <h1 className="font-serif text-5xl md:text-6xl text-neutral-900 mb-8 font-light">World-Class Fleet</h1>
           <p className="text-neutral-500 text-xl max-w-2xl mx-auto font-light leading-relaxed">
             Experience the ultimate in comfort and style. Our pristine vehicles are meticulously maintained to ensure safety and luxury for every journey.
           </p>
        </div>
      </div>

      {/* Highlight Section: Safety & Maintenance */}
      <section className="bg-white py-24 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                     <ShieldCheck className="w-8 h-8 text-neutral-900 mr-4" />
                     <h2 className="font-serif text-3xl md:text-4xl text-neutral-900">Safety First</h2>
                  </div>
                  <p className="text-neutral-500 text-lg font-light leading-relaxed mb-6">
                     At Icon Transportation, the condition of our fleet is paramount. Each vehicle undergoes rigorous daily safety inspections and detailing before it ever leaves our garage. 
                  </p>
                  <p className="text-neutral-500 text-lg font-light leading-relaxed mb-8">
                     We operate only late-model vehicles equipped with the latest safety technology, ensuring that you and your guests arrive at your destination securely.
                  </p>
                  <Link to="/contact">
                     <Button variant="outline">Inquire About Specific Vehicles</Button>
                  </Link>
               </div>
               <div className="order-1 lg:order-2">
                  <div className="aspect-[4/3] bg-neutral-100 rounded-sm overflow-hidden shadow-lg">
                     <img 
                       src="https://picsum.photos/id/1070/800/600?grayscale" 
                       alt="Vehicle Interior Detail" 
                       className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Fleet Grid */}
      <div className="bg-neutral-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {FLEET.map((vehicle) => (
              <div key={vehicle.id} className="group flex flex-col h-full bg-white border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden bg-neutral-200 relative">
                  <img 
                    src={`${vehicle.imageUrl}?grayscale`} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="font-serif text-2xl text-neutral-900 mb-2">{vehicle.name}</h2>
                  <div className="flex items-center space-x-6 text-sm text-neutral-500 mb-6 border-b border-neutral-100 pb-6">
                     <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{vehicle.capacity} Passengers</span>
                     </div>
                     {vehicle.luggage > 0 && (
                       <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-2" />
                          <span>{vehicle.luggage} Bags</span>
                       </div>
                     )}
                  </div>
                  
                  <p className="text-neutral-500 font-light mb-6 flex-grow text-sm leading-relaxed">
                    {vehicle.description}
                  </p>

                  <div className="mb-8 bg-neutral-50 p-4 rounded-sm">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Amenities</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {vehicle.features.map((feature, i) => (
                        <li key={i} className="text-xs text-neutral-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link to="/contact" className="w-full block">
                      <Button fullWidth variant="primary" className="text-sm">Request a Quote</Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Note Section */}
      <div className="bg-white py-16 px-6 border-t border-neutral-100">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
           <Info className="w-6 h-6 text-neutral-400 mb-4" />
           <p className="text-neutral-400 text-sm font-light leading-relaxed">
             Vehicle availability may vary based on schedule. We recommend booking in advance to secure your preferred vehicle.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Fleet;