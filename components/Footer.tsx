import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <span className="font-serif text-3xl font-semibold tracking-wider">ICON</span>
            </Link>
            <p className="text-neutral-400 font-light leading-relaxed max-w-xs">
              Wilmington's Premier Private Transportation. Delivering precision, style, and reliability for over 14 years.
            </p>
          </div>

          {/* Links Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-widest text-neutral-500">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-sm uppercase tracking-wide hover:text-neutral-400 transition-colors">Services</Link></li>
              <li><Link to="/locations" className="text-sm uppercase tracking-wide hover:text-neutral-400 transition-colors">Locations</Link></li>
              <li><Link to="/fleet" className="text-sm uppercase tracking-wide hover:text-neutral-400 transition-colors">Fleet</Link></li>
              <li><Link to="/about" className="text-sm uppercase tracking-wide hover:text-neutral-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm uppercase tracking-wide hover:text-neutral-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium uppercase tracking-widest text-neutral-500">Contact</h4>
            <div className="space-y-4 text-neutral-300 font-light">
              <p>{COMPANY_PHONE}</p>
              <p>{COMPANY_EMAIL}</p>
              <address className="not-italic">
                Wilmington, NC<br />
                Serving the Cape Fear Region
              </address>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;