import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { LOCATIONS } from '../constants';
import Button from '../components/ui/Button';
import { MapPin, ArrowRight } from 'lucide-react';

const LocationChild: React.FC = () => {
  const { slug, childSlug } = useParams<{ slug: string; childSlug: string }>();
  const location = LOCATIONS.find(l => l.slug === slug);
  const childPage = location?.children?.find(c => c.slug === childSlug);

  if (!location || !childPage) {
    return <Navigate to={`/locations/${slug || ''}`} replace />;
  }

  const siblings = location.children?.filter(c => c.slug !== childSlug) || [];

  return (
    <div className="pt-20">
      
      {/* Hero */}
      <div className="bg-neutral-50 py-24 px-6 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto text-center">
           <div className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-6 flex justify-center items-center gap-2">
             <Link to="/locations" className="hover:text-neutral-900 transition-colors">Locations</Link> 
             <span className="text-neutral-300">/</span> 
             <Link to={`/locations/${location.slug}`} className="hover:text-neutral-900 transition-colors">{location.name}</Link>
           </div>
           <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6 font-light">{childPage.title}</h1>
           <p className="text-neutral-500 text-xl font-light max-w-3xl mx-auto leading-relaxed">{childPage.excerpt}</p>
        </div>
      </div>

      {/* Main Content Split */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
             
             {/* Text - Left (7 cols) */}
             <div className="lg:col-span-7 order-2 lg:order-1">
                <h2 className="font-serif text-3xl text-neutral-900 mb-8">Area Overview</h2>
                <div className="prose prose-lg text-neutral-500 font-light leading-relaxed mb-10">
                   <p>{childPage.description}</p>
                </div>

                <div className="bg-neutral-50 p-8 rounded-sm border border-neutral-100 mb-10">
                   <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-6">Service Highlights</h4>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {childPage.features?.map((f, i) => (
                        <li key={i} className="flex items-center text-neutral-600 text-sm">
                           <MapPin className="w-4 h-4 mr-3 text-neutral-400" /> {f}
                        </li>
                      ))}
                   </ul>
                </div>
                
                <Link to="/contact">
                   <Button variant="primary">Schedule Pickup</Button>
                </Link>
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

      {/* Secondary Details */}
      <section className="bg-neutral-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-neutral-900 mb-8">Service Logistics</h2>
          <p className="text-neutral-600 text-lg font-light leading-relaxed mb-12">
             {childPage.secondaryContent}
          </p>
          <div className="p-10 bg-white border border-neutral-100 shadow-sm rounded-sm">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                   <span className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Bookings</span>
                   <span className="block text-xl font-serif text-neutral-900">Available 24/7</span>
                </div>
                 <div className="text-center md:text-left border-t md:border-t-0 md:border-l border-neutral-100 pt-6 md:pt-0 md:pl-8">
                   <span className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Fleet</span>
                   <span className="block text-xl font-serif text-neutral-900">All Vehicles</span>
                </div>
                 <div className="text-center md:text-left border-t md:border-t-0 md:border-l border-neutral-100 pt-6 md:pt-0 md:pl-8">
                   <span className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Type</span>
                   <span className="block text-xl font-serif text-neutral-900">Door-to-Door</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Nearby */}
      {siblings.length > 0 && (
        <section className="bg-white py-24 px-6 border-t border-neutral-100">
           <div className="max-w-7xl mx-auto">
              <h2 className="font-serif text-3xl text-neutral-900 mb-12 text-center">Nearby Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {siblings.slice(0, 3).map((sibling) => (
                   <Link key={sibling.id} to={`/locations/${location.slug}/${sibling.slug}`} className="block group bg-white border border-neutral-100 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="aspect-video bg-neutral-100 overflow-hidden">
                         <img src={`${sibling.heroImage}?grayscale`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <div className="p-6">
                         <h3 className="text-lg font-serif text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">{sibling.title}</h3>
                         <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-900 transition-colors inline-flex items-center">
                            Explore <ArrowRight className="w-3 h-3 ml-2" />
                         </span>
                      </div>
                   </Link>
                 ))}
              </div>
           </div>
        </section>
      )}
      
      {/* Simple CTA */}
      <section className="bg-white py-16 px-6 border-t border-neutral-100">
         <div className="max-w-7xl mx-auto text-center">
             <Link to="/contact">
                <Button>Get a Quote for {childPage.title}</Button>
             </Link>
         </div>
      </section>

    </div>
  );
};

export default LocationChild;