import React, { useState } from 'react';
import { Mail, Send, Loader } from 'lucide-react';
import { supabase } from '../lib/supabase';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            forward_to: 'info@Titansurgicalsystems.com'
          }
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError('Failed to submit form. Please try again.');
      console.error('Contact form error:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-text-light mb-4">Message Sent!</h3>
        <p className="text-text-muted mb-8">
          Thank you for contacting us. We'll get back to you shortly.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-light mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-background rounded-lg border border-text-muted/20 focus:border-primary focus:ring-1 focus:ring-primary text-text-light"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-light mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-background rounded-lg border border-text-muted/20 focus:border-primary focus:ring-1 focus:ring-primary text-text-light"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text-light mb-2">
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-background rounded-lg border border-text-muted/20 focus:border-primary focus:ring-1 focus:ring-primary text-text-light"
          placeholder="Your phone number"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-light mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-background rounded-lg border border-text-muted/20 focus:border-primary focus:ring-1 focus:ring-primary text-text-light resize-none"
          placeholder="How can we help you?"
        />
      </div>

      {error && (
        <div className="text-accent text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full btn-primary flex items-center justify-center"
      >
        {status === 'submitting' ? (
          <>
            <Loader className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;