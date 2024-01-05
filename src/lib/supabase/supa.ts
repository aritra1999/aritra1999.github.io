import { createClient } from '@supabase/supabase-js';

const supabaseURL = import.meta.env.VITE_SUPABASE_URL ?? '';
const supabaseANONKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

const supabase = createClient(supabaseURL, supabaseANONKey);

export default supabase;
