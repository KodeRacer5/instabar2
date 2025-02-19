import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import ContactModal from './ContactModal';

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const phoneNumber = '619-892-8007';
  
  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber.replace(/-/g, '')}`;
  };

  return (
    <footer className="bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Insta-bar</h3>
            <p className="text-text-muted mb-4">
              Revolutionizing bar management with cutting-edge technology and comprehensive solutions.
            </p>
            <div className="space-y-2">
              <button 
                onClick={handlePhoneClick}
                className="flex items-center text-text-muted hover:text-primary transition-colors"
              >
                <Phone size={16} className="mr-2" />
                {phoneNumber}
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center text-text-muted hover:text-primary transition-colors"
              >
                <Mail size={16} className="mr-2" />
                Contact Us
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-text-light">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-muted hover:text-primary">POS System</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary">Inventory Management</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary">Staff Management</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary">Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-text-light">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-muted hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary">Case Studies</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-text-muted hover:text-primary">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-text-light">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-text-muted hover:text-primary">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-text-muted hover:text-primary">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-text-muted hover:text-primary">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-text-muted hover:text-primary">
                <Linkedin size={24} />
              </a>
            </div>
            <button 
              onClick={handlePhoneClick}
              className="btn-primary w-full mb-2 flex items-center justify-center"
            >
              <Phone size={16} className="mr-2" />
              Call Us Now
            </button>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="btn-secondary w-full flex items-center justify-center"
            >
              <Mail size={16} className="mr-2" />
              Send Message
            </button>
          </div>
        </div>
        
        <div className="border-t border-text-muted/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted">© 2024 Insta-bar. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-text-muted hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-text-muted hover:text-primary">Terms of Service</a>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="text-text-muted hover:text-primary"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;