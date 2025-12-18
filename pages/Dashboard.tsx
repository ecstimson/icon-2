import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, Calendar, CreditCard, Settings, LogOut, 
  Plus, Car, Download, Phone, Mail, Navigation, Star, Edit2, Minus, X
} from 'lucide-react';
import Button from '../components/ui/Button';
import { MOCK_USER, MOCK_TRIPS, MOCK_PAYMENT_METHODS, FLEET, SERVICES } from '../constants';
import { Trip, TripGuest } from '../types';

type Tab = 'overview' | 'trips' | 'profile' | 'wallet';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [user] = useState(MOCK_USER);
  const [upcomingTrips] = useState(MOCK_TRIPS.filter(t => new Date(t.date) > new Date() || t.status === 'En Route'));
  const [pastTrips] = useState(MOCK_TRIPS.filter(t => new Date(t.date) <= new Date() && t.status !== 'En Route'));

  const handleLogout = () => {
    localStorage.removeItem('icon_user');
    navigate('/login');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En Route': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'Scheduled': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Completed': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-neutral-600 bg-neutral-100 border-neutral-200';
    }
  };

  const addToCalendarUrl = (trip: Trip) => {
    const start = new Date(trip.date).toISOString().replace(/-|:|\.\d\d\d/g, "");
    const end = new Date(new Date(trip.date).getTime() + 3600000).toISOString().replace(/-|:|\.\d\d\d/g, ""); // Assume 1 hour
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Icon+Transfer:+${encodeURIComponent(trip.pickupLocation)}&dates=${start}/${end}&details=Confirmation+ID:+${trip.id}&location=${encodeURIComponent(trip.pickupLocation)}`;
  };

  const ActiveTripCard: React.FC<{ trip: Trip }> = ({ trip }) => {
    const [note, setNote] = useState(trip.notes || '');
    const [guests, setGuests] = useState<TripGuest[]>(trip.guests || []);
    const [newGuestEmail, setNewGuestEmail] = useState('');
    const [isEditingRoute, setIsEditingRoute] = useState(false);
    const [pickup, setPickup] = useState(trip.pickupLocation);
    const [dropoff, setDropoff] = useState(trip.dropoffLocation);
    const [stops, setStops] = useState<string[]>(trip.stops || []);

    const vehicle = FLEET.find(v => v.id === trip.vehicleId);
    const service = SERVICES.find(s => s.id === trip.serviceId) || SERVICES[0];

    const handleAddGuest = (e: React.FormEvent) => {
      e.preventDefault();
      if(newGuestEmail) {
        setGuests([...guests, { email: newGuestEmail, status: 'Pending' }]);
        setNewGuestEmail('');
      }
    };

    const addStop = () => setStops([...stops, '']);
    const updateStop = (index: number, val: string) => {
      const newStops = [...stops];
      newStops[index] = val;
      setStops(newStops);
    };
    const removeStop = (index: number) => {
      setStops(stops.filter((_, i) => i !== index));
    };

    return (
      <div className="bg-white border border-neutral-200 shadow-sm rounded-sm overflow-hidden mb-8">
        <div className="p-6 border-b border-neutral-100 flex justify-between items-center bg-neutral-50/50">
           <div className="flex items-center gap-3">
             <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusColor(trip.status)}`}>
               {trip.status}
             </span>
             <span className="text-neutral-400 text-sm">#{trip.id.toUpperCase()}</span>
           </div>
           <a href={addToCalendarUrl(trip)} target="_blank" rel="noreferrer" className="text-xs font-medium text-neutral-600 hover:text-neutral-900 flex items-center">
             <Calendar className="w-3 h-3 mr-1" /> Add to Calendar
           </a>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left: Journey Info */}
            <div className="lg:col-span-2 space-y-8">
               {trip.status === 'En Route' && (
                 <div className="bg-neutral-900 text-white p-4 rounded-sm flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-4">
                       <div className="relative">
                          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-neutral-900 rounded-full"></span>
                          <img src={trip.driverPhoto} alt="Driver" className="w-12 h-12 rounded-full object-cover border-2 border-neutral-700" />
                       </div>
                       <div>
                          <p className="font-medium">{trip.driverName} is 5 mins away</p>
                          <div className="flex items-center text-xs text-neutral-400">
                             <Star className="w-3 h-3 text-amber-400 fill-amber-400 mr-1" />
                             {trip.driverRating} Rating • {vehicle?.name}
                          </div>
                       </div>
                    </div>
                    <div className="flex gap-2">
                      <a href={`tel:${trip.driverPhone}`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Phone className="w-5 h-5" />
                      </a>
                      <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <Mail className="w-5 h-5" />
                      </button>
                    </div>
                 </div>
               )}

               <div className="flex flex-col gap-6">
                  {/* Route Header with Edit Button */}
                  <div className="flex justify-between items-start">
                     <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{new Date(trip.date).toLocaleDateString()} • {trip.time}</span>
                     <button 
                       onClick={() => setIsEditingRoute(!isEditingRoute)}
                       className="text-xs font-medium text-neutral-900 hover:text-neutral-600 flex items-center"
                     >
                       {isEditingRoute ? <X className="w-3 h-3 mr-1"/> : <Edit2 className="w-3 h-3 mr-1" />}
                       {isEditingRoute ? 'Done' : 'Edit Route'}
                     </button>
                  </div>

                  <div className="flex gap-4">
                     {/* Timeline Line */}
                     <div className="flex flex-col items-center pt-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-900"></div>
                        <div className="w-0.5 flex-grow bg-neutral-200 my-1 min-h-[60px]"></div>
                         {/* Dots for stops if any */}
                         {stops.map((_, i) => (
                           <React.Fragment key={i}>
                             <div className="w-1.5 h-1.5 rounded-full bg-neutral-400"></div>
                             <div className="w-0.5 flex-grow bg-neutral-200 my-1 min-h-[30px]"></div>
                           </React.Fragment>
                         ))}
                        <div className="w-2.5 h-2.5 rounded-full border-2 border-neutral-900 bg-white"></div>
                     </div>
                     
                     {/* Route Details */}
                     <div className="flex-grow space-y-6">
                        {/* Pickup */}
                        <div>
                           <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Pickup</label>
                           {isEditingRoute ? (
                             <input 
                               type="text" 
                               value={pickup} 
                               onChange={(e) => setPickup(e.target.value)}
                               className="w-full border border-neutral-300 rounded-sm px-3 py-2 text-sm bg-white focus:border-neutral-900 focus:outline-none"
                             />
                           ) : (
                             <h3 className="text-lg font-medium text-neutral-900">{pickup}</h3>
                           )}
                        </div>

                        {/* Stops */}
                        {(stops.length > 0 || isEditingRoute) && (
                          <div className="space-y-4">
                            {stops.map((stop, i) => (
                              <div key={i}>
                                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Stop {i + 1}</label>
                                {isEditingRoute ? (
                                  <div className="flex gap-2">
                                    <input 
                                      type="text" 
                                      value={stop} 
                                      onChange={(e) => updateStop(i, e.target.value)}
                                      className="w-full border border-neutral-300 rounded-sm px-3 py-2 text-sm bg-white focus:border-neutral-900 focus:outline-none"
                                    />
                                    <button onClick={() => removeStop(i)} className="text-red-500 hover:bg-red-50 p-2 rounded-sm"><Minus className="w-4 h-4" /></button>
                                  </div>
                                ) : (
                                  <h3 className="text-sm font-medium text-neutral-600">{stop}</h3>
                                )}
                              </div>
                            ))}
                            {isEditingRoute && (
                              <button onClick={addStop} className="text-xs font-bold text-neutral-900 flex items-center uppercase tracking-widest hover:text-neutral-600">
                                <Plus className="w-3 h-3 mr-1" /> Add Stop
                              </button>
                            )}
                          </div>
                        )}

                        {/* Destination */}
                        <div>
                           <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Destination</label>
                           {isEditingRoute ? (
                             <input 
                               type="text" 
                               value={dropoff} 
                               onChange={(e) => setDropoff(e.target.value)}
                               className="w-full border border-neutral-300 rounded-sm px-3 py-2 text-sm bg-white focus:border-neutral-900 focus:outline-none"
                             />
                           ) : (
                             <h3 className="text-lg font-medium text-neutral-900">{dropoff}</h3>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Map Placeholder */}
               <div className="w-full h-48 bg-neutral-100 rounded-sm relative overflow-hidden flex items-center justify-center border border-neutral-200">
                  <Navigation className="w-8 h-8 text-neutral-300 mb-2" />
                  <span className="text-neutral-400 text-xs uppercase tracking-widest">Live Map View</span>
                  {/* Mock map elements */}
                  <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
               </div>

               {/* Notes & Guests - Light Theme Enforced */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-neutral-100">
                 <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Driver Notes</label>
                    <textarea 
                      className="w-full border border-neutral-200 rounded-sm p-3 text-sm focus:border-neutral-900 focus:outline-none transition-colors bg-white text-neutral-900" 
                      rows={3} 
                      placeholder="Gate code, luggage help, etc."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    ></textarea>
                 </div>
                 <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Invited Guests</label>
                    <div className="space-y-2 mb-3">
                       {guests.map((g, i) => (
                         <div key={i} className="flex justify-between items-center text-sm bg-white p-2 rounded-sm border border-neutral-200">
                            <span className="text-neutral-600 truncate">{g.email}</span>
                            <span className="text-xs text-neutral-400 italic">{g.status}</span>
                         </div>
                       ))}
                    </div>
                    <form onSubmit={handleAddGuest} className="flex gap-2">
                       <input 
                         type="email" 
                         placeholder="guest@email.com" 
                         className="flex-grow border border-neutral-200 rounded-sm px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none bg-white text-neutral-900"
                         value={newGuestEmail}
                         onChange={(e) => setNewGuestEmail(e.target.value)}
                       />
                       <button type="submit" className="bg-neutral-900 text-white px-3 py-2 rounded-sm hover:bg-neutral-800">
                          <Plus className="w-4 h-4" />
                       </button>
                    </form>
                 </div>
               </div>
            </div>

            {/* Right: Vehicle & Payment */}
            <div className="lg:col-span-1 space-y-8">
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Vehicle Selected</h4>
                  <div 
                    onClick={() => navigate('/fleet')}
                    className="bg-neutral-50 p-4 rounded-sm border border-neutral-100 group cursor-pointer hover:border-neutral-300 hover:shadow-md transition-all"
                  >
                     <img src={vehicle?.imageUrl} alt={vehicle?.name} className="w-full h-32 object-cover rounded-sm mb-4 mix-blend-multiply transition-transform group-hover:scale-105" />
                     <div className="flex justify-between items-center">
                        <h5 className="font-serif text-lg text-neutral-900 group-hover:underline">{vehicle?.name}</h5>
                        <Car className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900" />
                     </div>
                     <div className="mt-3 pt-3 border-t border-neutral-200 space-y-2">
                         <div className="flex justify-between text-xs">
                           <span className="text-neutral-500">Service</span>
                           <span className="font-medium text-neutral-900">{service.name}</span>
                         </div>
                         <div className="flex justify-between text-xs">
                           <span className="text-neutral-500">Vehicle Type</span>
                           <span className="font-medium text-neutral-900">{vehicle?.category}</span>
                         </div>
                         <div className="flex justify-between text-xs">
                           <span className="text-neutral-500">Rate Type</span>
                           <span className="font-medium text-neutral-900">Hourly Rate</span>
                         </div>
                     </div>
                  </div>
                  <p className="text-[10px] text-neutral-400 mt-2 text-center italic">* Hourly rate based on vehicle selection</p>
               </div>

               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Payment</h4>
                  <div 
                    onClick={() => setActiveTab('wallet')}
                    className="bg-neutral-50 p-4 rounded-sm border border-neutral-100 flex items-center justify-between cursor-pointer hover:border-neutral-300 hover:shadow-md transition-all group"
                  >
                     <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-neutral-600 group-hover:text-neutral-900" />
                        <span className="text-sm font-medium text-neutral-900">Visa ending in 4242</span>
                     </div>
                     <span className="text-sm font-bold text-neutral-900">${trip.price}</span>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    );
  };

  const TripRow: React.FC<{ trip: Trip }> = ({ trip }) => (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border-b border-neutral-100 hover:bg-neutral-50 transition-colors group">
       <div className="flex items-center gap-6 mb-4 md:mb-0">
          <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:shadow-md transition-all">
             <Car className="w-6 h-6" />
          </div>
          <div>
             <h4 className="font-serif text-lg text-neutral-900 mb-1">{trip.pickupLocation.split(',')[0]} <span className="text-neutral-300 mx-2">→</span> {trip.dropoffLocation.split(',')[0]}</h4>
             <p className="text-sm text-neutral-500">{new Date(trip.date).toLocaleDateString()} at {trip.time} • ${trip.price.toFixed(2)}</p>
          </div>
       </div>
       <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusColor(trip.status)}`}>
             {trip.status}
          </span>
          <Button variant="ghost" className="text-xs">Receipt <Download className="w-3 h-3 ml-2" /></Button>
       </div>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-neutral-50 flex">
      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-neutral-200 h-[calc(100vh-80px)] fixed left-0 top-20 overflow-y-auto">
         <div 
           onClick={() => setActiveTab('profile')}
           className="p-8 border-b border-neutral-100 cursor-pointer hover:bg-neutral-50 transition-colors group"
         >
            <div className="flex items-center gap-4">
               <div className="relative">
                 <img src={user.avatarUrl} alt={user.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-neutral-100 group-hover:ring-neutral-200" />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 rounded-full transition-all">
                    <Settings className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 drop-shadow-md" />
                 </div>
               </div>
               <div>
                  <h3 className="font-medium text-neutral-900 group-hover:text-neutral-700">{user.name}</h3>
                  <p className="text-xs text-neutral-500">Edit Profile</p>
               </div>
            </div>
         </div>
         <nav className="p-4 space-y-1">
            <button 
              onClick={() => setActiveTab('overview')} 
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm transition-colors ${activeTab === 'overview' ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:bg-neutral-50'}`}
            >
              <User className="w-4 h-4" /> Overview
            </button>
            <button 
              onClick={() => setActiveTab('trips')} 
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm transition-colors ${activeTab === 'trips' ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:bg-neutral-50'}`}
            >
              <Car className="w-4 h-4" /> My Trips
            </button>
            <button 
              onClick={() => setActiveTab('wallet')} 
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm transition-colors ${activeTab === 'wallet' ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:bg-neutral-50'}`}
            >
              <CreditCard className="w-4 h-4" /> Wallet
            </button>
            <button 
              onClick={() => setActiveTab('profile')} 
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm transition-colors ${activeTab === 'profile' ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:bg-neutral-50'}`}
            >
              <Settings className="w-4 h-4" /> Settings
            </button>
         </nav>
         <div className="mt-auto p-4 border-t border-neutral-100">
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-sm transition-colors">
               <LogOut className="w-4 h-4" /> Log Out
            </button>
         </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-6 lg:p-12 pb-24">
         
         {/* Mobile Nav Tabs */}
         <div className="lg:hidden flex overflow-x-auto gap-2 mb-8 pb-2 border-b border-neutral-200">
            {['overview', 'trips', 'wallet', 'profile'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab as Tab)}
                className={`px-4 py-2 text-sm font-medium uppercase tracking-wide whitespace-nowrap rounded-sm ${activeTab === tab ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-600'}`}
              >
                {tab}
              </button>
            ))}
            <button onClick={handleLogout} className="px-4 py-2 text-sm font-medium uppercase tracking-wide whitespace-nowrap rounded-sm text-red-600 bg-white">Logout</button>
         </div>

         {/* Overview Tab */}
         {activeTab === 'overview' && (
           <div className="max-w-4xl animate-fade-in-up">
              <div className="flex justify-between items-end mb-8">
                 <h1 className="font-serif text-3xl text-neutral-900">Dashboard</h1>
                 <Button onClick={() => navigate('/contact')}>Book New Trip</Button>
              </div>

              {/* Next Trip */}
              {upcomingTrips.length > 0 ? (
                 <>
                   <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Up Next</h2>
                   <ActiveTripCard trip={upcomingTrips[0]} />
                 </>
              ) : (
                <div className="bg-white p-12 text-center border border-neutral-200 rounded-sm mb-8">
                   <p className="text-neutral-500 mb-4">No upcoming trips scheduled.</p>
                   <Button onClick={() => navigate('/contact')}>Book Your First Ride</Button>
                </div>
              )}

              {/* Stats / Recent */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                 <div className="bg-neutral-900 text-white p-6 rounded-sm shadow-lg">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Total Trips</h3>
                    <p className="text-4xl font-serif">{pastTrips.length}</p>
                 </div>
                 <div className="bg-white p-6 rounded-sm border border-neutral-200 shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Membership Status</h3>
                    <p className="text-xl font-serif text-neutral-900">Icon Gold Member</p>
                 </div>
              </div>
           </div>
         )}

         {/* Trips Tab */}
         {activeTab === 'trips' && (
           <div className="max-w-4xl animate-fade-in-up">
              <h1 className="font-serif text-3xl text-neutral-900 mb-8">My Trips</h1>
              
              <div className="bg-white border border-neutral-200 rounded-sm shadow-sm mb-12">
                 <div className="p-4 border-b border-neutral-100 bg-neutral-50">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900">Upcoming</h2>
                 </div>
                 <div>
                    {upcomingTrips.length === 0 && <p className="p-8 text-neutral-500 text-sm text-center">No upcoming trips.</p>}
                    {upcomingTrips.map(trip => (
                       <TripRow key={trip.id} trip={trip} />
                    ))}
                 </div>
              </div>

              <div className="bg-white border border-neutral-200 rounded-sm shadow-sm">
                 <div className="p-4 border-b border-neutral-100 bg-neutral-50">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-900">Past History</h2>
                 </div>
                 <div>
                    {pastTrips.length === 0 && <p className="p-8 text-neutral-500 text-sm text-center">No travel history.</p>}
                    {pastTrips.map(trip => (
                       <TripRow key={trip.id} trip={trip} />
                    ))}
                 </div>
              </div>
           </div>
         )}

         {/* Wallet Tab */}
         {activeTab === 'wallet' && (
           <div className="max-w-2xl animate-fade-in-up">
              <div className="flex justify-between items-center mb-8">
                 <h1 className="font-serif text-3xl text-neutral-900">Payment Methods</h1>
                 <Button variant="outline" className="text-xs"><Plus className="w-4 h-4 mr-2" /> Add Card</Button>
              </div>

              <div className="space-y-4">
                 {MOCK_PAYMENT_METHODS.map(pm => (
                   <div key={pm.id} className="bg-white p-6 border border-neutral-200 rounded-sm flex justify-between items-center">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-8 bg-neutral-100 rounded-sm flex items-center justify-center border border-neutral-200">
                           <span className="text-xs font-bold text-neutral-600">{pm.brand}</span>
                         </div>
                         <div>
                            <p className="font-medium text-neutral-900">•••• •••• •••• {pm.last4}</p>
                            <p className="text-xs text-neutral-500">Expires {pm.expiry}</p>
                         </div>
                      </div>
                      {pm.isDefault && <span className="bg-neutral-100 text-neutral-600 text-xs px-2 py-1 rounded-sm uppercase tracking-wide">Default</span>}
                   </div>
                 ))}
              </div>
              
              <h2 className="font-serif text-xl text-neutral-900 mt-12 mb-6">Billing History</h2>
              <div className="bg-white border border-neutral-200 rounded-sm">
                 <div className="p-4 border-b border-neutral-100 flex justify-between text-sm text-neutral-500">
                    <span>Date</span>
                    <span>Amount</span>
                 </div>
                 {pastTrips.slice(0,3).map(trip => (
                    <div key={trip.id} className="p-4 border-b border-neutral-100 flex justify-between text-sm text-neutral-900 last:border-0">
                       <span>{new Date(trip.date).toLocaleDateString()}</span>
                       <span>${trip.price.toFixed(2)}</span>
                    </div>
                 ))}
              </div>
           </div>
         )}

         {/* Profile Tab */}
         {activeTab === 'profile' && (
           <div className="max-w-2xl animate-fade-in-up">
              <h1 className="font-serif text-3xl text-neutral-900 mb-8">Profile Settings</h1>
              
              <div className="bg-white p-8 border border-neutral-200 rounded-sm shadow-sm">
                 <div className="flex items-center gap-6 mb-8">
                    <img src={user.avatarUrl} alt="Avatar" className="w-20 h-20 rounded-full object-cover" />
                    <Button variant="outline" className="text-xs">Change Photo</Button>
                 </div>

                 <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                          <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Full Name</label>
                          <input type="text" defaultValue={user.name} className="w-full border border-neutral-300 rounded-sm px-4 py-3 text-neutral-900 bg-white focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all" />
                       </div>
                       <div>
                          <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Phone Number</label>
                          <input type="tel" defaultValue={user.phone} className="w-full border border-neutral-300 rounded-sm px-4 py-3 text-neutral-900 bg-white focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all" />
                       </div>
                    </div>
                    <div>
                       <label className="block text-xs uppercase tracking-wider text-neutral-500 mb-2">Email Address</label>
                       <input type="email" defaultValue={user.email} className="w-full border border-neutral-300 rounded-sm px-4 py-3 text-neutral-900 bg-white focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 transition-all" />
                    </div>
                    
                    <div className="pt-6">
                       <Button>Save Changes</Button>
                    </div>
                 </form>
              </div>
           </div>
         )}

      </main>
    </div>
  );
};

export default Dashboard;