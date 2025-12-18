import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS } from '../constants';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      
      {/* Hero / Brand Intro */}
      <section className="bg-white py-24 lg:py-32 px-6 border-b border-neutral-100">
         <div className="max-w-7xl mx-auto text-center mb-24">
            <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase block mb-6">About Icon Transportation</span>
            <h1 className="font-serif text-5xl lg:text-7xl text-neutral-900 mb-8 leading-tight font-light">Experience the Icon Difference</h1>
         </div>

         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="order-2 lg:order-1">
               <h2 className="font-serif text-3xl lg:text-4xl text-neutral-900 mb-8 leading-tight">Our Story</h2>
               <div className="space-y-6 text-neutral-600 font-light text-lg leading-relaxed">
                 <p>
                   Icon Transportation Wilmington was founded in March 2020 with a simple mission: bring personalized, professional transportation to the Cape Fear region. Our team brings years of combined industry experience to every ride, understanding that transportation is more than just getting from point A to point B.
                 </p>
                 <p>
                   We recognized that Wilmington needed a transportation service that truly understood the local community—from the traffic patterns around the downtown historic district to the best routes to our beautiful beach communities. 
                 </p>
                 <p>
                   Our commitment to excellence means we focus on the details that matter most: customized routes based on local knowledge, personal recommendations for Wilmington's best destinations, and reliable service that ensures every experience is smooth and memorable.
                 </p>
               </div>
            </div>
            
            <div className="order-1 lg:order-2">
               <div className="aspect-[4/5] bg-neutral-100 rounded-sm overflow-hidden relative shadow-lg">
                  <img src="https://picsum.photos/id/1015/800/1000?grayscale" alt="Wilmington Scene" className="w-full h-full object-cover grayscale" />
               </div>
            </div>
         </div>
      </section>

      {/* Founder Section (Light Gray) */}
      <section className="bg-neutral-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative order-1">
               <div className="aspect-[3/4] max-w-md mx-auto relative z-10 shadow-xl bg-white p-2 rounded-sm">
                 <img 
                   src="https://picsum.photos/id/1005/600/800" 
                   alt="Jason Wagner, Owner" 
                   className="w-full h-full object-cover grayscale"
                 />
               </div>
            </div>

            <div className="lg:pl-12 order-2">
               <h2 className="font-serif text-4xl lg:text-5xl text-neutral-900 mb-2">Meet Our Founder</h2>
               <h3 className="text-neutral-500 text-xl font-medium mb-8">Jason Wagner, Owner</h3>
               
               <div className="space-y-6 text-neutral-600 font-light text-lg leading-relaxed mb-10">
                 <p>
                   With over 25 years in the transportation industry, Jason established Icon Transportation Wilmington to provide the Cape Fear region with the professional, personalized service that was missing in the local market.
                 </p>
                 <p>
                   As a Wilmington resident, Jason understands the unique transportation needs of our community—from navigating beach traffic during tourist season to coordinating complex wedding day logistics. 
                 </p>
                 <p>
                   When not behind the wheel or coordinating transportation logistics, Jason enjoys several of Wilmington's recreational sports leagues including softball and flag football.
                 </p>
               </div>
            </div>
        </div>
      </section>

      {/* Contact Info Block */}
      <section className="py-24 bg-white text-center px-6 border-t border-neutral-100">
         <div className="max-w-4xl mx-auto">
             <div className="bg-neutral-50 p-12 border border-neutral-100 rounded-sm">
                <h3 className="font-serif text-3xl mb-8 text-neutral-900">Get in Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
                   <div>
                      <Phone className="w-6 h-6 mx-auto mb-3 text-neutral-400" />
                      <p className="text-neutral-900 font-medium">{COMPANY_PHONE}</p>
                   </div>
                   <div>
                      <Mail className="w-6 h-6 mx-auto mb-3 text-neutral-400" />
                      <p className="text-neutral-900 font-medium break-all text-sm">{COMPANY_EMAIL}</p>
                   </div>
                   <div>
                      <MapPin className="w-6 h-6 mx-auto mb-3 text-neutral-400" />
                      <p className="text-neutral-900 font-medium text-sm">{COMPANY_ADDRESS}</p>
                   </div>
                </div>
                <Link to="/contact">
                  <Button>Book Now</Button>
                </Link>
             </div>
         </div>
      </section>
    </div>
  );
};

export default About;