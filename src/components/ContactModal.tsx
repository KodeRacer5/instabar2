import React from 'react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative bg-background-dark rounded-xl shadow-xl max-w-lg w-full p-8 transform transition-all">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-text-muted hover:text-text-light transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-text-light mb-2">
              Contact Us
            </h2>
            <p className="text-text-muted">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactModal;