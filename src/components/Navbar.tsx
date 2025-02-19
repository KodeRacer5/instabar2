import React, { useState, useEffect } from 'react';
import { Menu, X, GlassWater, ChevronDown, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ContactModal from './ContactModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const location = useLocation();
  const phoneNumber = '619-892-8007';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber.replace(/-/g, '')}`;
  };

  const menuItems = [
    {
      label: 'Products',
      href: '/products',
      submenu: [
        { label: 'Standard System', href: '/products/standard-system' },
        { label: 'Digital Bundle', href: '/products/digital-bundle' },
        { label: 'Professional Kit', href: '/products/professional-kit' }
      ]
    },
    {
      label: 'Technology',
      href: '/technology',
      submenu: [
        { label: 'Core Technology', href: '/technology/core' },
        { label: 'Digital Integration', href: '/technology/digital-integration' },
        { label: 'Specifications', href: '/technology/specifications' }
      ]
    },
    { label: 'Resources', href: '/resources' }
  ];

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'h-20 bg-background-dark/95 backdrop-blur-md shadow-lg' : 'h-24 bg-transparent'
      }`}>
        <div className="container-default h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
            >
              <GlassWater size={32} className="text-primary transition-transform group-hover:scale-110" />
              <span className="text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                Insta-Bar™
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Main navigation" className="hidden lg:block flex-1 px-16">
              <ul className="flex justify-center space-x-12">
                {menuItems.map((item, index) => (
                  <li key={index} className="relative group">
                    <Link 
                      to={item.href}
                      className={`flex items-center text-white hover:text-primary transition-colors py-2 ${
                        location.pathname.startsWith(item.href) ? 'text-primary' : ''
                      }`}
                    >
                      {item.label}
                      {item.submenu && (
                        <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                      )}
                    </Link>
                    {item.submenu && (
                      <ul className="absolute left-0 top-full mt-2 py-2 bg-background-dark/95 backdrop-blur-md rounded-lg shadow-xl border border-text-muted/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px]">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.href}
                              className={`block px-4 py-2 text-white hover:text-primary hover:bg-text-muted/5 transition-colors ${
                                location.pathname === subItem.href ? 'text-primary bg-text-muted/5' : ''
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={handlePhoneClick}
                className="flex items-center text-white hover:text-primary transition-colors"
              >
                <Phone size={20} className="mr-2" />
                {phoneNumber}
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="btn-primary"
              >
                Contact Sales
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-primary p-2 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-background-dark/95 backdrop-blur-md border-b border-text-muted/10 transition-all duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <nav aria-label="Mobile navigation" className="container-default py-6">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index} className="group">
                  <Link 
                    to={item.href}
                    className={`block px-4 py-3 text-white hover:text-primary hover:bg-text-muted/5 rounded-lg transition-colors ${
                      location.pathname.startsWith(item.href) ? 'text-primary bg-text-muted/5' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <ul className="pl-8 mt-2 space-y-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={subItem.href}
                            className={`block px-4 py-2 text-text-muted hover:text-primary hover:bg-text-muted/5 rounded-lg transition-colors ${
                              location.pathname === subItem.href ? 'text-primary bg-text-muted/5' : ''
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="px-4 pt-4 space-y-4">
                <button 
                  onClick={handlePhoneClick}
                  className="w-full btn-secondary flex items-center justify-center"
                >
                  <Phone size={16} className="mr-2" />
                  {phoneNumber}
                </button>
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    setIsContactModalOpen(true);
                  }}
                  className="w-full btn-primary"
                >
                  Contact Sales
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Navbar;