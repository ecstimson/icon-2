import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES, COMPANY_PHONE } from '../constants';
import Button from '../components/ui/Button';
import { ArrowRight, Check } from 'lucide-react';

const ServiceChild: React.FC = () => {
  const { slug, childSlug } = useParams<{ slug: string; childSlug: string }>();
  const service = SERVICES.find(s => s.slug === slug);
  const childPage = service?.children?.find(c => c.slug === childSlug);

  if (!service || !childPage) {
    return <Navigate to={`/services/${slug || ''}`} replace />;
  }

  const siblings = service.children?.filter(c => c.slug !== childSlug) || [];

  return (
    <div className="pt-20">
      
      {/* Hero Section */}
      <div className="bg-neutral-50 py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
           <div className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-6 flex justify-center items-center gap-2">
             <Link to="/services" className="hover:text-neutral-900 transition-colors">Services</Link> 
             <span className="text-neutral-300">/</span> 
             <Link to={`/services/${service.slug}`} className="hover:text-neutral-900 transition-colors">{service.name}</Link>
             <span className="text-neutral-300">/</span> 
             <span className="text-neutral-900">{childPage.title}</span>
           </div>
           <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-8 font-light leading-tight">{childPage.title}</h1>
           <p className="text-neutral-500 text-xl max-w-3xl mx-auto font-light leading-relaxed">{childPage.excerpt}</p>
        </div>
      </div>

      {/* Main Content Split */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
             
             {/* Text - Left (7 cols) */}
             <div className="lg:col-span-7 order-2 lg:order-1">
                <h2 className="font-serif text-3xl text-neutral-900 mb-8">Service Overview</h2>
                <div className="prose prose-lg text-neutral-500 font-light leading-relaxed mb-10">
                   <p>{childPage.description}</p>
                </div>
                
                <div className="bg-white border-l-2 border-neutral-900 pl-6 mb-10">
                   <h3 className="font-serif text-xl text-neutral-900 mb-4">What to Expect</h3>
                   <p className="text-neutral-500 text-lg leading-relaxed">{childPage.secondaryContent}</p>
                </div>

                <div className="mt-12">
                   <Link to="/contact">
                     <Button>Check Availability</Button>
                   </Link>
                </div>
             </div>

             {/* Image - Right (5 cols) */}
             <div className="lg:col-span-5 order-1 lg:order-2">
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-neutral-100 shadow-xl sticky top-32">
                   <img 
                     src={`${childPage.heroImage}?grayscale`} 
                     alt={childPage.title} 
                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                   />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Clean Layout */}
      <section className="bg-neutral-50 py-24 px-6">
         <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-3xl text-neutral-900 mb-16 text-center">Standard Inclusions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {childPage.features?.map((feature, idx) => (
                 <div key={idx} className="bg-white p-8 border border-neutral-100 flex flex-col items-center text-center rounded-sm hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center mb-6 text-neutral-900 border border-neutral-100">
                       <Check className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-medium text-neutral-900 mb-2">{feature}</h3>
                    <p className="text-neutral-400 text-sm">Designed for your ultimate comfort.</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Related Services (Sibling Navigation) */}
      {siblings.length > 0 && (
        <section className="bg-white py-24 px-6 border-t border-neutral-100">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                 <h2 className="font-serif text-3xl text-neutral-900 mb-4 md:mb-0">Other {service.name} Options</h2>
                 <Link to={`/services/${service.slug}`} className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors">View All Services</Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {siblings.slice(0, 3).map((sibling) => (
                   <Link key={sibling.id} to={`/services/${service.slug}/${sibling.slug}`} className="group block bg-white border border-neutral-100 p-0 hover:shadow-lg transition-all duration-300 rounded-sm overflow-hidden">
                     <div className="aspect-[3/2] overflow-hidden bg-neutral-100">
                        <img src={`${sibling.heroImage}?grayscale`} alt={sibling.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                     </div>
                     <div className="p-6">
                        <h3 className="text-lg font-serif text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">{sibling.title}</h3>
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-900 inline-flex items-center mt-2">
                          Details <ArrowRight className="w-3 h-3 ml-2" />
                        </span>
                     </div>
                   </Link>
                 ))}
              </div>
           </div>
        </section>
      )}

      {/* Call to Action - Minimalist */}
      <section className="bg-neutral-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-6">Ready to Book?</h2>
          <p className="text-neutral-400 mb-8 font-light">
            Our reservation specialists are available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link to="/contact">
               <Button className="bg-white text-neutral-900 hover:bg-neutral-200 w-full sm:w-auto">Book Now</Button>
             </Link>
             <a href={`tel:${COMPANY_PHONE}`} className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide uppercase border border-neutral-700 hover:border-white transition-colors w-full sm:w-auto">
                Call {COMPANY_PHONE}
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceChild;