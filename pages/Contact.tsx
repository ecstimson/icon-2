import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { COMPANY_EMAIL, COMPANY_PHONE, SERVICES } from '../constants';
import { Plus, Minus, MapPin, Users as UsersIcon, Clock, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [stops, setStops] = useState<string[]>([]);
  
  const addStop = () => setStops([...stops, '']);
  const removeStop = (i: number) => setStops(stops.filter((_, idx) => idx !== i));
  const handleStopChange = (i: number, val: string) => {
    const newStops = [...stops];
    newStops[i] = val;
    setStops(newStops);
  };

  return (
    <div className="pt-20 min-h-screen">
      
      {/* Hero Text */}
      <div className="bg-white py-24 px-6 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto text-center">
           <span className="text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase block mb-6">Inquiries & Reservations</span>
           <h1 className="font-serif text-5xl md:text-6xl text-neutral-900 mb-6 font-light">Start Your Journey</h1>
           <p className="text-neutral-500 text-xl max-w-2xl mx-auto font-light">
             Charged by the hour or set price. Customize your itinerary with multiple stops.
           </p>
        </div>
      </div>

      <div className="bg-neutral-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Form Column */}
            <div className="bg-white p-8 md:p-12 shadow-sm border border-neutral-100 rounded-sm">
               <h3 className="font-serif text-2xl text-neutral-900 mb-8">Request a Quote</h3>
               <form className="space-y-6">
                  {/* Contact Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Full Name</label>
                       <input type="text" className="w-full border-b border-neutral-200 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors bg-transparent" placeholder="John Doe" />
                     </div>
                     <div>
                       <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Email Address</label>
                       <input type="email" className="w-full border-b border-neutral-200 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors bg-transparent" placeholder="john@example.com" />
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Phone Number</label>
                       <input type="tel" className="w-full border-b border-neutral-200 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors bg-transparent" placeholder="(910) 000-0000" />
                     </div>
                     <div>
                       <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Service Type</label>
                       <select className="w-full border-b border-neutral-200 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors bg-transparent">
                         {SERVICES.map(s => (
                           <option key={s.id} value={s.id}>{s.name}</option>
                         ))}
                       </select>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                     <div>
                        <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Vehicle Preference</label>
                        <select className="w-full border-b border-neutral-200 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors bg-transparent">
                           <option value="">Select a Vehicle Type</option>
                           <option value="SUV">Luxury SUV (Escalade)</option>
                           <option value="Sedan">Executive Sedan</option>
                           <option value="Bus">Party Bus / Limo Coach</option>
                           <option value="Van">Executive Sprinter Van</option>
                        </select>
                        <p className="text-[10px] text-neutral-400 mt-2 italic">* Hourly rate determined by vehicle selection.</p>
                     </div>
                  </div>

                  {/* Itinerary Section */}
                  <div className="pt-4 space-y-4">
                     <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-900 border-b border-neutral-100 pb-2 mb-4">Itinerary</h4>
                     
                     <div className="relative">
                        <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Pickup Location</label>
                        <div className="relative">
                           <MapPin className="absolute left-3 top-3 w-5 h-5 text-neutral-400" />
                           <input type="text" className="w-full border border-neutral-200 rounded-sm py-3 pl-10 pr-4 text-neutral-900 focus:outline-none focus:border-neutral-900 bg-neutral-50 focus:bg-white transition-colors" placeholder="Airport, Hotel, or Address" />
                        </div>
                     </div>

                     {stops.map((stop, index) => (
                       <div key={index} className="relative flex gap-2 items-end animate-fade-in-up">
                          <div className="flex-grow">
                             <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Stop {index + 1}</label>
                             <div className="relative">
                                <MapPin className="absolute left-3 top-3 w-5 h-5 text-neutral-400" />
                                <input 
                                  type="text" 
                                  value={stop}
                                  onChange={(e) => handleStopChange(index, e.target.value)}
                                  className="w-full border border-neutral-200 rounded-sm py-3 pl-10 pr-4 text-neutral-900 focus:outline-none focus:border-neutral-900 bg-neutral-50 focus:bg-white transition-colors" 
                                  placeholder="Restaurant, Stopover, etc." 
                                />
                             </div>
                          </div>
                          <button type="button" onClick={() => removeStop(index)} className="mb-0.5 p-3 text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-sm border border-neutral-200 transition-colors" title="Remove Stop">
                             <Minus className="w-5 h-5" />
                          </button>
                       </div>
                     ))}

                     <button type="button" onClick={addStop} className="text-xs font-bold uppercase tracking-widest text-neutral-900 hover:text-neutral-600 flex items-center py-2 transition-colors">
                        <Plus className="w-3 h-3 mr-2" /> Add Stop
                     </button>

                     <div className="relative pt-2">
                        <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Dropoff Location</label>
                        <div className="relative">
                           <MapPin className="absolute left-3 top-3 w-5 h-5 text-neutral-400" />
                           <input type="text" className="w-full border border-neutral-200 rounded-sm py-3 pl-10 pr-4 text-neutral-900 focus:outline-none focus:border-neutral-900 bg-neutral-50 focus:bg-white transition-colors" placeholder="Destination Address" />
                        </div>
                     </div>
                  </div>

                  {/* Logistics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                     <div>
                       <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Date</label>
                       <div className="relative">
                          <Calendar className="absolute left-3 top-3 w-5 h-5 text-neutral-400" />
                          <input type="date" className="w-full border border-neutral-200 rounded-sm py-3 pl-10 pr-4 text-neutral-900 focus:outline-none focus:border-neutral-900 bg-neutral-50 focus:bg-white transition-colors" />
                       </div>
                     </div>
                     <div>
                       <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Time</label>
                       <div className="relative">
                          <Clock className="absolute left-3 top-3 w-5 h-5 text-neutral-400" />
                          <input type="time" className="w-full border border-neutral-200 rounded-sm py-3 pl-10 pr-4 text-neutral-900 focus:outline-none focus:border-neutral-900 bg-neutral-50 focus:bg-white transition-colors" />
                       </div>
                     </div>
                  </div>

                  <div>
                     <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Total Passengers</label>
                     <div className="relative">
                        <UsersIcon className="absolute left-3 top-3 w-5 h-5 text-neutral-400" />
                        <input type="number" min="1" className="w-full border border-neutral-200 rounded-sm py-3 pl-10 pr-4 text-neutral-900 focus:outline-none focus:border-neutral-900 bg-neutral-50 focus:bg-white transition-colors" placeholder="Number of guests" />
                     </div>
                  </div>

                  <div>
                     <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Additional Details</label>
                     <textarea rows={4} className="w-full border-b border-neutral-200 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors bg-transparent" placeholder="Luggage count, special requests, child seats needed, etc."></textarea>
                  </div>

                  <div className="pt-6">
                    <Button fullWidth>Submit Request</Button>
                  </div>
               </form>
            </div>

            {/* Image / Info Column */}
            <div className="flex flex-col justify-between">
               {/* Highlight Photo */}
               <div className="aspect-[4/3] bg-neutral-200 rounded-sm overflow-hidden shadow-lg mb-12 sticky top-24">
                   <img src="https://picsum.photos/id/1059/800/600?grayscale" alt="Concierge Service" className="w-full h-full object-cover grayscale" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                      <p className="text-white text-lg font-serif">"We handle the logistics so you can enjoy the journey."</p>
                   </div>
               </div>

               <div className="bg-white p-8 border border-neutral-100 rounded-sm">
                 <h3 className="font-serif text-xl mb-6">Contact Info</h3>
                 <div className="space-y-6 text-neutral-500 font-light">
                   <p className="flex flex-col border-b border-neutral-100 pb-4">
                     <span className="text-xs uppercase tracking-wide text-neutral-400 mb-1">Phone</span>
                     <span className="text-neutral-900 text-lg">{COMPANY_PHONE}</span>
                   </p>
                   <p className="flex flex-col border-b border-neutral-100 pb-4">
                     <span className="text-xs uppercase tracking-wide text-neutral-400 mb-1">Email</span>
                     <span className="text-neutral-900 text-lg">{COMPANY_EMAIL}</span>
                   </p>
                   <div className="pt-2">
                      <p className="text-xs uppercase tracking-wide text-neutral-400 mb-1">Hours</p>
                      <p className="text-neutral-900">Mon-Sun: 24 Hours</p>
                      <p className="text-xs text-neutral-400 mt-1 italic">Reservations recommended.</p>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;