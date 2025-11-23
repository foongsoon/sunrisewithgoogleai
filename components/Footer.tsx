import React from 'react';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-sunrise-400 mb-4">Sunrise Education</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing wonderful content and excellence in Cambridge IGCSE education for Primary and Secondary students.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sunrise-500 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sunrise-500 shrink-0" />
                <a href={`tel:${CONTACT_INFO.whatsapp.replace(/\s/g, '')}`} className="hover:text-sunrise-400 transition-colors">
                  {CONTACT_INFO.phone} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sunrise-500 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-sunrise-400 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <a 
              href={CONTACT_INFO.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6 text-center text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Sunrise Education (www.sun.edu.my). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
