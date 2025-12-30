'use client';

import { Clock, FileText, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

import SpotlightCard from '@/src/components/ReactBits/Cards/SpotlightCard';

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="h-full"
    >
      <SpotlightCard className="h-full" spotlightColor="rgba(139, 92, 246, 0.3)">
        <h2 className="mb-6 text-xl font-bold text-white">Contact Information</h2>
        
        {/* Email via Form */}
        <div className="mb-6 flex items-start gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
            <MessageSquare className="size-5 text-white" />
          </div>
          <div>
            <h3 className="font-medium text-white">Email Us</h3>
            <p className="text-sm text-gray-400">
              Fill out the form and we'll respond within 24-48 hours.
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="mb-6 flex items-start gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
            <MapPin className="size-5 text-white" />
          </div>
          <div>
            <h3 className="font-medium text-white">Location</h3>
            <p className="text-sm text-gray-400">San Diego, California</p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mb-6 flex items-start gap-4 border-t border-white/10 pt-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600">
            <Clock className="size-5 text-white" />
          </div>
          <div>
            <h3 className="font-medium text-white">Business Hours</h3>
            <p className="text-sm text-gray-400">Mon - Fri: 9AM - 5PM PST</p>
            <p className="text-sm text-gray-400">Sat - Sun: Closed</p>
          </div>
        </div>

        {/* Distributor Inquiries */}
        <div className="flex items-start gap-4 border-t border-white/10 pt-6">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
            <FileText className="size-5 text-white" />
          </div>
          <div>
            <h3 className="font-medium text-white">Distributors</h3>
            <p className="text-sm text-gray-400">
              Interested in carrying Insta-Bar? Use the form for wholesale inquiries.
            </p>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
}
