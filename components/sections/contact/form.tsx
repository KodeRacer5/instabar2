'use client';

import { AlertCircle, CheckCircle, Loader2, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.currentTarget.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `w-full rounded-lg border border-white/10 bg-black/50 px-4 py-2.5 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`;

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Glowing container - subtle intensity */}
      <div className="group/form relative">
        {/* Animated glow border - subtle */}
        <div
          className="absolute -inset-[1px] rounded-2xl opacity-50 blur-sm transition-opacity duration-500 group-hover/form:opacity-70"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #22d3ee, #8b5cf6, #3b82f6)',
            backgroundSize: '300% 100%',
            animation: 'gradient-shift 4s ease infinite',
          }}
        />

        {/* Outer glow pulse - subtle */}
        <div
          className="absolute -inset-[4px] rounded-2xl opacity-20 blur-lg"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #22d3ee, #8b5cf6, #3b82f6)',
            backgroundSize: '300% 100%',
            animation: 'gradient-shift 4s ease infinite, glow-pulse 2s ease-in-out infinite',
          }}
        />

        {/* Form container */}
        <div className="relative z-10 rounded-2xl bg-gray-900/90 p-6 backdrop-blur-sm md:p-8">
          <h2 className="mb-6 text-2xl font-bold text-white">Send Us a Message</h2>

          {submitStatus === 'success' && (
            <div className="mb-6 flex items-center gap-3 rounded-lg border border-green-500/30 bg-green-500/10 p-4">
              <CheckCircle className="size-5 shrink-0 text-green-400" />
              <p className="text-green-300">Thank you! We'll be in touch soon.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4">
              <AlertCircle className="size-5 shrink-0 text-red-400" />
              <p className="text-red-300">Something went wrong. Please try again.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field - hidden from humans, bots will fill it */}
            <input
              type="text"
              name="website"
              autoComplete="off"
              tabIndex={-1}
              className="pointer-events-none absolute -left-[9999px] opacity-0"
              aria-hidden="true"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className={inputClasses}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className={inputClasses}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Subject</label>
              <select name="subject" className={inputClasses}>
                <option>Product Inquiry</option>
                <option>Order Support</option>
                <option>Distributor Inquiry</option>
                <option>Technical Support</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className={inputClasses}
                placeholder="How can we help?"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 size-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.35;
          }
        }
      `}</style>
    </motion.div>
  );
}
