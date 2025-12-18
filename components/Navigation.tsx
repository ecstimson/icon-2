import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import Button from './ui/Button';
import { SERVICES, LOCATIONS } from '../constants';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for "auth"
    const user = localStorage.getItem('icon_user');
    setIsLoggedIn(!!user);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200' : 'bg-white border-b border-neutral-100'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 z-50">
            <span className="font-serif text-2xl font-semibold tracking-wider text-neutral-900">ICON</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium tracking-wide uppercase text-neutral-900 hover:text-neutral-600 transition-colors">Home</Link>
            
            {/* Services Dropdown */}
            <div className="relative group h-20 flex items-center">
              <Link to="/services" className="flex items-center text-sm font-medium tracking-wide uppercase text-neutral-900 hover:text-neutral-600 transition-colors cursor-pointer">
                Services <ChevronDown className="ml-1 w-3 h-3" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-xl border border-neutral-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 rounded-sm py-2">
                {SERVICES.map((service) => (
                  <Link key={service.id} to={`/services/${service.slug}`} className="block px-6 py-3 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors">
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="relative group h-20 flex items-center">
              <Link to="/locations" className="flex items-center text-sm font-medium tracking-wide uppercase text-neutral-900 hover:text-neutral-600 transition-colors cursor-pointer">
                Locations <ChevronDown className="ml-1 w-3 h-3" />
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white shadow-xl border border-neutral-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 rounded-sm py-2">
                {LOCATIONS.map((loc) => (
                  <Link key={loc.id} to={`/locations/${loc.slug}`} className="block px-6 py-3 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors">
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/fleet" className="text-sm font-medium tracking-wide uppercase text-neutral-900 hover:text-neutral-600 transition-colors">Fleet</Link>
            <Link to="/about" className="text-sm font-medium tracking-wide uppercase text-neutral-900 hover:text-neutral-600 transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium tracking-wide uppercase text-neutral-900 hover:text-neutral-600 transition-colors">Contact</Link>
          </nav>

          {/* CTA Button & Login */}
          <div className="hidden lg:flex items-center space-x-6">
            {isLoggedIn ? (
              <Link to="/dashboard" className="flex items-center text-sm font-medium tracking-wide uppercase text-neutral-900 hover:text-neutral-600 transition-colors">
                <User className="w-4 h-4 mr-2" /> My Dashboard
              </Link>
            ) : (
              <Link to="/login" className="text-sm font-medium tracking-wide uppercase text-neutral-900 hover:text-neutral-600 transition-colors">
                Log In
              </Link>
            )}
            
            <Link to="/contact">
              <Button>Book Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-50 p-2 -mr-2 text-neutral-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          <Link to="/" className="text-2xl font-serif tracking-widest uppercase hover:text-neutral-500">Home</Link>
          <Link to="/services" className="text-2xl font-serif tracking-widest uppercase hover:text-neutral-500">Services</Link>
          <Link to="/locations" className="text-2xl font-serif tracking-widest uppercase hover:text-neutral-500">Locations</Link>
          <Link to="/fleet" className="text-2xl font-serif tracking-widest uppercase hover:text-neutral-500">Fleet</Link>
          <Link to="/about" className="text-2xl font-serif tracking-widest uppercase hover:text-neutral-500">About</Link>
          <Link to="/contact" className="text-2xl font-serif tracking-widest uppercase hover:text-neutral-500">Contact</Link>
          
          <div className="flex flex-col gap-4 mt-8 w-64">
             {isLoggedIn ? (
                <Link to="/dashboard">
                  <Button variant="outline" fullWidth>My Dashboard</Button>
                </Link>
             ) : (
                <Link to="/login">
                  <Button variant="outline" fullWidth>Log In</Button>
                </Link>
             )}
             <Link to="/contact">
               <Button fullWidth>Book Now</Button>
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;