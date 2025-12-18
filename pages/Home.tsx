import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Clock, Calendar, ArrowRight, MapPin, Quote } from 'lucide-react';
import Button from '../components/ui/Button';
import { SERVICES, LOCATIONS, TESTIMONIALS, COMPANY_PHONE } from '../constants';

const Home: React.FC = () => {
  return (
    <main className="w-full overflow-hidden">
      
      {/* SECTION 1 - Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/1/1920/1080?grayscale" 
            alt="Luxury Car Background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl animate-fade-in-up">
            <span className="block text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase mb-6">Luxury Transportation</span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-neutral-900 leading-tight mb-8">
              Wilmington's Finest Private Car Service
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed mb-4">
              Airport transfers, executive travel, and special occasions—delivered with precision and style.
            </p>
            <p className="text-sm text-neutral-400 mb-10">
              Serving Wilmington, Wrightsville Beach, and the entire Cape Fear region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <Link to="/contact">
                 <Button>Book Your Ride</Button>
               </Link>
               <Link to="/services">
                 <Button variant="outline">View Services</Button>
               </Link>
            </div>
          </div>

          {/* Right CTA Cards */}
          <div className="flex flex-col gap-6 max-w-md ml-auto w-full">
            
            {/* Card 1 */}
            <div className="group bg-white p-8 border border-neutral-100 luxury-shadow hover:luxury-shadow-hover transition-all duration-300 transform hover:-translate-y-1 rounded-sm">
              <div className="flex items-start justify-between mb-4">
                <Plane className="w-6 h-6 text-neutral-900 stroke-1" />
                <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">Airport</span>
              </div>
              <h3 className="text-lg font-serif mb-2">Airport Service</h3>
              <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
                Flight monitoring and meet-and-greet service to ILM, RDU, CLT, and MYR.
              </p>
              <Link to="/services/airport-transportation" className="text-xs font-medium uppercase tracking-wide border-b border-neutral-200 pb-1 group-hover:border-neutral-900 transition-colors inline-flex items-center">
                Book Now <ArrowRight className="w-3 h-3 ml-2" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-8 border border-neutral-100 luxury-shadow hover:luxury-shadow-hover transition-all duration-300 transform hover:-translate-y-1 rounded-sm">
              <div className="flex items-start justify-between mb-4">
                <Clock className="w-6 h-6 text-neutral-900 stroke-1" />
                <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">Hourly</span>
              </div>
              <h3 className="text-lg font-serif mb-2">Hourly Charter</h3>
              <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
                Flexible scheduling for corporate events, tours, and multi-stop itineraries.
              </p>
              <Link to="/services/corporate-travel" className="text-xs font-medium uppercase tracking-wide border-b border-neutral-200 pb-1 group-hover:border-neutral-900 transition-colors inline-flex items-center">
                Book Now <ArrowRight className="w-3 h-3 ml-2" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-8 border border-neutral-100 luxury-shadow hover:luxury-shadow-hover transition-all duration-300 transform hover:-translate-y-1 rounded-sm">
              <div className="flex items-start justify-between mb-4">
                <Calendar className="w-6 h-6 text-neutral-900 stroke-1" />
                <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">Events</span>
              </div>
              <h3 className="text-lg font-serif mb-2">Special Occasions</h3>
              <p className="text-sm text-neutral-500 mb-4 leading-relaxed">
                Weddings, anniversaries, and milestone celebrations with white-glove service.
              </p>
              <Link to="/services/special-events" className="text-xs font-medium uppercase tracking-wide border-b border-neutral-200 pb-1 group-hover:border-neutral-900 transition-colors inline-flex items-center">
                Book Now <ArrowRight className="w-3 h-3 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - Services Overview */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase block mb-4">Our Services</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-neutral-900 mb-6">Tailored Transportation for Every Need</h2>
            <p className="max-w-2xl mx-auto text-neutral-500 font-light leading-relaxed">
              We provide a comprehensive range of luxury transportation services, ensuring comfort and reliability for every journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link key={service.id} to={`/services/${service.slug}`} className="group block">
                <div className="relative overflow-hidden mb-6 aspect-[4/3] rounded-sm">
                  <img 
                    src={`${service.imageUrl}?grayscale`} 
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <h3 className="text-xl font-serif text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">{service.name}</h3>
                <p className="text-neutral-500 font-light text-sm mb-4 leading-relaxed">{service.description}</p>
                <span className="text-xs font-medium uppercase tracking-wide border-b border-neutral-200 pb-1 group-hover:border-neutral-900 transition-colors inline-flex items-center">
                  Learn More <ArrowRight className="w-3 h-3 ml-2" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - Brand Statement */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase block mb-4">About Icon</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-neutral-900 mb-8 leading-tight">Fourteen Years of Excellence</h2>
              <div className="space-y-6 text-neutral-500 font-light leading-relaxed mb-10">
                <p>
                  Established in Wilmington, Icon Transportation has built a reputation over 14 years for defining luxury ground travel in the Cape Fear region. We are more than just a ride; we are a promise of punctuality, discretion, and unparalleled comfort.
                </p>
                <p>
                  Our commitment to personalized service means we pay attention to the smallest details—from the temperature of the cabin to your preferred route. We don't just transport you; we care for your journey.
                </p>
              </div>
              <div className="flex gap-4">
                <Link to="/about">
                  <Button variant="outline">Our Story</Button>
                </Link>
                <Link to="/services">
                  <Button>View Fleet</Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
               <div className="aspect-[4/5] relative">
                 <div className="absolute inset-0 border border-neutral-200 transform translate-x-4 translate-y-4 z-0"></div>
                 <img 
                   src="https://picsum.photos/id/111/800/1000?grayscale" 
                   alt="Chauffeur opening car door" 
                   className="relative z-10 w-full h-full object-cover grayscale shadow-lg"
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - Service Areas */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase block mb-4">Service Areas</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-neutral-900 mb-6">Throughout the Cape Fear Region and Beyond</h2>
            <p className="max-w-2xl mx-auto text-neutral-500 font-light leading-relaxed">
              Based in Wilmington, we serve the entire coastal Carolina region with connections to major hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="group bg-white p-8 border border-neutral-100 hover:shadow-lg transition-all duration-300">
                 <div className="flex items-center justify-between mb-4">
                   <MapPin className="w-5 h-5 text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                 </div>
                 <h3 className="text-xl font-serif text-neutral-900 mb-2">{loc.name}</h3>
                 <p className="text-neutral-500 font-light text-sm mb-6">{loc.description}</p>
                 <Link to={`/locations/${loc.slug}`} className="text-xs font-medium uppercase tracking-wide text-neutral-400 group-hover:text-neutral-900 transition-colors inline-flex items-center">
                  Explore <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                 </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase block mb-4">Client Experiences</span>
                <h2 className="font-serif text-4xl text-neutral-900">Trusted by Discerning Travelers</h2>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-2xl text-neutral-900">5.0</span>
                <div className="flex text-neutral-900">
                  {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                </div>
                <span className="text-neutral-400 text-sm ml-2 border-l border-neutral-200 pl-2">54 Reviews</span>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {TESTIMONIALS.map((t) => (
               <div key={t.id} className="bg-neutral-50 p-10 rounded-sm relative">
                 <Quote className="absolute top-8 left-8 w-8 h-8 text-neutral-200 fill-current" />
                 <p className="relative z-10 text-neutral-600 font-serif italic text-lg leading-relaxed mb-8 pt-6">
                   "{t.text}"
                 </p>
                 <div className="flex items-center justify-between border-t border-neutral-200 pt-6">
                   <div>
                     <p className="text-sm font-semibold text-neutral-900">{t.author}</p>
                     <p className="text-xs text-neutral-400 uppercase tracking-wider">{t.date}</p>
                   </div>
                   <div className="flex text-neutral-900 text-xs">
                    {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                   </div>
                 </div>
               </div>
             ))}
           </div>
           
           <div className="text-center mt-12">
             <Link to="/about" className="text-sm font-medium uppercase tracking-wide border-b border-neutral-200 pb-1 hover:border-neutral-900 transition-colors">
               Read More Reviews
             </Link>
           </div>
        </div>
      </section>

      {/* SECTION 6 - Final CTA */}
      <section className="py-32 bg-neutral-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Ready to Experience the Difference?</h2>
          <p className="text-neutral-400 text-lg font-light mb-12 max-w-2xl mx-auto">
            Contact us for reservations or custom transportation solutions tailored to your specific requirements.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-12">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center">
                 <span className="text-xl">📞</span>
               </div>
               <div className="text-left">
                 <p className="text-xs text-neutral-500 uppercase tracking-wider">Call Us</p>
                 <p className="text-lg font-medium">{COMPANY_PHONE}</p>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center">
                 <span className="text-xl">✉️</span>
               </div>
               <div className="text-left">
                 <p className="text-xs text-neutral-500 uppercase tracking-wider">Email Us</p>
                 <p className="text-lg font-medium">Bookings@icon.com</p>
               </div>
            </div>
          </div>

          <Link to="/contact">
            <button className="bg-white text-neutral-900 px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors transform hover:-translate-y-1">
              Book Your Ride
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
};

export default Home;