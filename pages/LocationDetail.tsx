import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { LOCATIONS } from '../constants';
import Button from '../components/ui/Button';
import { Shield, Clock, Star, MapPin, ArrowRight } from 'lucide-react';

const LocationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = LOCATIONS.find(l => l.slug === slug);

  if (!location) {
    return <Navigate to="/locations" replace />;
  }

  const hasChildren = location.children && location.children.length > 0;

  return (
    <div className="pt-20">
      
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${location.imageUrl}?grayscale`} 
            alt={location.name} 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-6">
           <div className="text-xs font-semibold tracking-[0.2em] text-white/80 uppercase mb-4 inline-block px-4 py-2 border border-white/20 backdrop-blur-sm">
              Service Area
           </div>
           <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">{location.name}</h1>
           <p className="text-neutral-300 text-lg font-light max-w-xl mx-auto">{location.description}</p>
        </div>
      </div>

      {/* Main Content Split */}
      <section className="bg-white py-24 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
               
               {/* Text Column (7 cols) */}
               <div className="lg:col-span-7">
                  <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-8">Local Excellence</h2>
                  <div className="text-neutral-500 text-lg font-light leading-relaxed space-y-6 mb-10">
                     <p>{location.longDescription}</p>
                     <p>Whether navigating the busy summer traffic or taking the scenic route, our chauffeurs possess the local knowledge to ensure your journey is smooth and efficient. We pride ourselves on knowing every shortcut and best route in {location.name}.</p>
                  </div>
                  
                  {/* Key Areas List (Not Cards) */}
                  {location.keyPoints && (
                    <div className="bg-neutral-50 p-8 border border-neutral-100 rounded-sm">
                        <h3 className="font-serif text-xl text-neutral-900 mb-6">Key Destinations</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                           {location.keyPoints.map((point, idx) => (
                              <li key={idx} className="flex items-center text-sm text-neutral-600">
                                 <MapPin className="w-4 h-4 mr-3 text-neutral-400" /> 
                                 {point}
                              </li>
                           ))}
                        </ul>
                    </div>
                  )}
               </div>
               
               {/* Visual Column (5 cols) */}
               <div className="lg:col-span-5">
                  <div className="aspect-[3/4] bg-neutral-100 rounded-sm overflow-hidden shadow-lg sticky top-32">
                     <img 
                        src={`https://picsum.photos/seed/${location.id}/800/600?grayscale`} 
                        alt={`${location.name} Highlights`}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Child Locations (Internal Links) */}
      {hasChildren && (
        <section className="bg-neutral-50 py-24 px-6 border-t border-neutral-100">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="font-serif text-3xl text-neutral-900 mb-4">Featured Destinations</h2>
                 <p className="text-neutral-500 font-light">Specific areas we service within {location.name}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {location.children!.map((child) => (
                   <Link key={child.id} to={`/locations/${location.slug}/${child.slug}`} className="group bg-white border border-neutral-100 p-0 block hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden h-full flex flex-col">
                      <div className="aspect-[3/2] overflow-hidden bg-neutral-200">
                         <img src={`${child.heroImage}?grayscale`} alt={child.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                         <h3 className="text-xl font-serif text-neutral-900 mb-3">{child.title}</h3>
                         <p className="text-neutral-500 text-sm font-light leading-relaxed mb-6 flex-grow">{child.excerpt}</p>
                         <span className="text-xs font-bold uppercase tracking-widest text-neutral-900 flex items-center self-start">
                            View Details <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                         </span>
                      </div>
                   </Link>
                 ))}
              </div>
           </div>
        </section>
      )}

      {/* Stats/Info Section */}
      <section className="bg-white py-24 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-100">
               <div className="px-4 py-8 md:py-0">
                  <Clock className="w-8 h-8 text-neutral-900 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-neutral-900 mb-2">Reliable Timing</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mx-auto">We prioritize punctuality, arriving 15 minutes early to ensure a stress-free departure.</p>
               </div>
               <div className="px-4 py-8 md:py-0">
                  <Shield className="w-8 h-8 text-neutral-900 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-neutral-900 mb-2">Safe & Secure</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mx-auto">All chauffeurs are vetted and trained. Our vehicles are meticulously maintained.</p>
               </div>
               <div className="px-4 py-8 md:py-0">
                  <Star className="w-8 h-8 text-neutral-900 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-neutral-900 mb-2">Top Rated</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed max-w-xs mx-auto">Consistently rated 5 stars for luxury travel in the {location.name} area.</p>
               </div>
            </div>
            
            <div className="mt-20 text-center">
               <Link to="/contact">
                  <Button>Book Your Ride in {location.name}</Button>
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default LocationDetail;