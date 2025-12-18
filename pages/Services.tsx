import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import Button from '../components/ui/Button';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-white py-24 lg:py-32 px-6 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto text-center">
           <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase block mb-6">Our Expertise</span>
           <h1 className="font-serif text-5xl md:text-6xl text-neutral-900 mb-8 font-light">Premium Transportation Services</h1>
           <p className="text-neutral-500 text-xl max-w-2xl mx-auto font-light leading-relaxed">
             Explore our diverse range of luxury transportation options, each designed to provide the highest level of comfort, punctuality, and professionalism.
           </p>
        </div>
      </div>

      {/* Services List - Alternating Layout */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-32">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Column */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm relative group bg-neutral-100 shadow-sm">
                     <img 
                       src={`${service.imageUrl}?grayscale`} 
                       alt={service.name} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                     />
                  </div>
                </div>

                {/* Text Column */}
                <div className="w-full lg:w-1/2">
                  <span className="text-xs font-bold tracking-[0.2em] text-neutral-300 uppercase block mb-4">0{index + 1}</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-6">{service.name}</h2>
                  <p className="text-neutral-500 text-lg font-light leading-relaxed mb-8">
                    {service.longDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-10">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-neutral-600 tracking-wide">
                        <span className="w-1 h-1 bg-neutral-400 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link to={`/services/${service.slug}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;