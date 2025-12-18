import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import Button from '../components/ui/Button';
import { Check, Shield, Clock, Star, ArrowRight } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Unique image for this page layout based on slug
  const highlightImage = service.children?.[0]?.heroImage || service.imageUrl;
  const hasChildren = service.children && service.children.length > 0;

  return (
    <div className="pt-20">
      
      {/* Hero Section */}
      <div className="bg-white py-24 lg:py-32 px-6 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
           <div className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-6 flex justify-center items-center gap-2">
             <Link to="/services" className="hover:text-neutral-900 transition-colors">Services</Link> 
             <span className="text-neutral-300">/</span> 
             <span className="text-neutral-900">{service.name}</span>
           </div>
           <h1 className="font-serif text-5xl md:text-6xl text-neutral-900 mb-8 font-light leading-tight">{service.name}</h1>
           <p className="text-neutral-500 text-xl font-light leading-relaxed">{service.description}</p>
        </div>
      </div>

      {/* Main Content & Visuals */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Content Column (Left - 7 cols) */}
            <div className="lg:col-span-7">
               <h2 className="font-serif text-3xl text-neutral-900 mb-8">Service Overview</h2>
               
               <div className="prose prose-lg text-neutral-500 font-light leading-relaxed mb-12">
                 <p className="mb-6">{service.longDescription}</p>
                 <p>
                   We understand that every journey is unique. Whether you require a seamless airport transfer, a mobile office for corporate travel, or a red-carpet experience for a special event, our team is dedicated to exceeding your expectations.
                 </p>
               </div>

               {/* Key Points / Features List (Not Cards) */}
               <div className="bg-neutral-50 p-8 rounded-sm border border-neutral-100">
                  <h3 className="font-serif text-xl text-neutral-900 mb-6">
                    {service.slug === 'airport-transportation' ? 'Airports We Serve' : 'Key Features'}
                  </h3>
                  
                  {/* If we have keyPoints, show them as a clean list */}
                  {service.keyPoints ? (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start text-neutral-600">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-neutral-400 rounded-full flex-shrink-0 mr-3"></span>
                          <span className="text-sm md:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center text-neutral-600">
                          <Check className="w-4 h-4 text-neutral-400 mr-3" />
                          <span className="text-sm md:text-base">{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
               </div>
            </div>

            {/* Visual Column (Right - 5 cols) */}
            <div className="lg:col-span-5 relative">
               <div className="aspect-[3/4] overflow-hidden rounded-sm bg-neutral-100 relative shadow-lg sticky top-32">
                  <div className="absolute inset-0 border border-white/20 z-10 m-4"></div>
                  <img 
                    src={`${highlightImage}?grayscale`} 
                    alt="Service Highlight" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Internal Linking / Child Services Cards */}
      {hasChildren && (
        <section className="bg-neutral-50 py-24 px-6 border-t border-neutral-100">
           <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-4">Explore Options</h2>
                 <p className="text-neutral-500 font-light">Select a specific service category to learn more.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {service.children!.map((child) => (
                   <Link key={child.id} to={`/services/${service.slug}/${child.slug}`} className="group flex flex-col bg-white border border-neutral-100 hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden">
                      <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                         <img 
                           src={`${child.heroImage}?grayscale`} 
                           alt={child.title} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" 
                         />
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                         <h3 className="text-xl font-serif text-neutral-900 mb-3 group-hover:text-neutral-600 transition-colors">{child.title}</h3>
                         <p className="text-neutral-500 text-sm font-light leading-relaxed mb-6 flex-grow">{child.excerpt}</p>
                         <span className="text-xs font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-200 pb-1 group-hover:border-neutral-900 transition-colors inline-flex items-center self-start">
                           View Details <ArrowRight className="w-3 h-3 ml-2" />
                         </span>
                      </div>
                   </Link>
                 ))}
              </div>
           </div>
        </section>
      )}

      {/* Differentiators (Light Gray) */}
      <section className="bg-white py-24 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-8">Why Choose Icon?</h2>
                  <div className="space-y-8">
                     <div className="flex gap-4">
                        <Clock className="w-6 h-6 text-neutral-900 flex-shrink-0" />
                        <div>
                           <h3 className="text-neutral-900 font-medium mb-2">Punctuality Guaranteed</h3>
                           <p className="text-neutral-500 text-sm leading-relaxed">We respect your time. Flight monitoring and advanced scheduling mean we are there when you need us.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <Shield className="w-6 h-6 text-neutral-900 flex-shrink-0" />
                        <div>
                           <h3 className="text-neutral-900 font-medium mb-2">Professional Chauffeurs</h3>
                           <p className="text-neutral-500 text-sm leading-relaxed">Our drivers are vetted, trained, and dedicated to your safety and comfort.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <Star className="w-6 h-6 text-neutral-900 flex-shrink-0" />
                        <div>
                           <h3 className="text-neutral-900 font-medium mb-2">Transparent Pricing</h3>
                           <p className="text-neutral-500 text-sm leading-relaxed">No hidden fees or surge pricing. Know exactly what you are paying for.</p>
                        </div>
                     </div>
                  </div>
                  <div className="mt-12">
                     <Link to="/contact">
                        <Button>Book Now</Button>
                     </Link>
                  </div>
               </div>
               
               {/* Decorative Layout Image */}
               <div className="relative h-full min-h-[400px] hidden lg:block">
                  <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-neutral-100 rounded-sm"></div>
                  <img 
                    src="https://picsum.photos/id/1033/800/1000?grayscale" 
                    alt="Chauffeur Service" 
                    className="absolute bottom-0 left-0 w-3/4 h-3/4 object-cover rounded-sm shadow-xl grayscale"
                  />
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServiceDetail;