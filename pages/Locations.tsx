import React from 'react';
import { Link } from 'react-router-dom';
import { LOCATIONS } from '../constants';
import Button from '../components/ui/Button';
import { MapPin } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-white py-24 lg:py-32 px-6 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto text-center">
           <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase block mb-6">Service Area</span>
           <h1 className="font-serif text-5xl md:text-6xl text-neutral-900 mb-8 font-light">Where We Operate</h1>
           <p className="text-neutral-500 text-xl max-w-2xl mx-auto font-light leading-relaxed">
             From the historic streets of Wilmington to the sandy shores of the Carolina coast, and connections to major regional hubs.
           </p>
        </div>
      </div>

      {/* Highlight Section: Regional Overview */}
      <section className="bg-white py-24 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1">
                  <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-6">Connecting the Carolinas</h2>
                  <p className="text-neutral-500 text-lg font-light leading-relaxed mb-6">
                     Icon Transportation is based in Wilmington, NC, but our reach extends far beyond the city limits. We specialize in connecting the coastal Cape Fear region with major metropolitan hubs like Raleigh, Charlotte, and Myrtle Beach.
                  </p>
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center text-neutral-600 font-light">
                        <MapPin className="w-4 h-4 mr-3 text-neutral-900" /> Serving New Hanover, Brunswick, & Pender Counties
                     </li>
                     <li className="flex items-center text-neutral-600 font-light">
                        <MapPin className="w-4 h-4 mr-3 text-neutral-900" /> Direct Airport Transfers to ILM, RDU, CLT, MYR
                     </li>
                     <li className="flex items-center text-neutral-600 font-light">
                        <MapPin className="w-4 h-4 mr-3 text-neutral-900" /> Long-distance Corporate Travel
                     </li>
                  </ul>
                  <Link to="/contact">
                     <Button>View Rate Card</Button>
                  </Link>
               </div>
               <div className="order-1 lg:order-2">
                  <div className="aspect-square overflow-hidden rounded-sm bg-neutral-100 relative">
                     <img 
                       src="https://picsum.photos/id/1036/800/800?grayscale" 
                       alt="Map or Scenic View" 
                       className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Locations Grid */}
      <div className="bg-neutral-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {LOCATIONS.map((loc) => (
               <Link key={loc.id} to={`/locations/${loc.slug}`} className="group block h-full">
                 <div className="bg-white border border-neutral-100 h-full p-0 hover:shadow-xl transition-all duration-300 flex flex-col rounded-sm overflow-hidden">
                   <div className="aspect-[16/10] overflow-hidden bg-neutral-200">
                      <img 
                        src={`${loc.imageUrl}?grayscale`} 
                        alt={loc.name}
                        className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-105" 
                      />
                   </div>
                   <div className="p-8 flex flex-col flex-grow">
                      <h2 className="font-serif text-2xl text-neutral-900 mb-3">{loc.name}</h2>
                      <p className="text-neutral-500 font-light mb-6 flex-grow text-sm leading-relaxed">{loc.description}</p>
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-900 group-hover:text-neutral-600 transition-colors">
                        Explore Area
                      </span>
                   </div>
                 </div>
               </Link>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;