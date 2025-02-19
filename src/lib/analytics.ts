import { supabase } from './supabase';

interface PageView {
  path: string;
  title: string;
  referrer: string;
  timestamp: Date;
}

interface CustomEvent {
  name: string;
  category: string;
  label?: string;
  value?: number;
  timestamp: Date;
}

export const analytics = {
  trackPageView: async (data: Omit<PageView, 'timestamp'>) => {
    try {
      await supabase.from('page_views').insert([
        {
          ...data,
          timestamp: new Date().toISOString()
        }
      ]);
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  },

  trackEvent: async (data: Omit<CustomEvent, 'timestamp'>) => {
    try {
      await supabase.from('events').insert([
        {
          ...data,
          timestamp: new Date().toISOString()
        }
      ]);
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  }
};