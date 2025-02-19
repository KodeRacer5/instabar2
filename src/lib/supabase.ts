import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
});

// Add Edge Function for email forwarding
const forwardEmail = async (submission: any) => {
  try {
    const { data, error } = await supabase.functions.invoke('forward-contact', {
      body: JSON.stringify(submission)
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error forwarding email:', error);
    throw error;
  }
};

export { forwardEmail };