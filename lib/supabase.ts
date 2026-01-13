
import { createClient } from '@supabase/supabase-js';

// Safe access to process.env
const env = typeof process !== 'undefined' ? process.env : {};

const supabaseUrl = (env as any).VITE_SUPABASE_URL || '';
const supabaseAnonKey = (env as any).VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('SUPABASE_CONFIG_MISSING: Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your environment.');
}

export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;
