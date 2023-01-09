import { createClient } from '@supabase/supabase-js'

// Supabase Config
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// HyGraph API & Token
export const contentUri = import.meta.env.VITE_HYGRAPH_CONTENT_API
const fastContentUri = import.meta.env.VITE_HYGRAPH_READONLY_CONTENT_API
export const permanentToken = import.meta.env.VITE_HYGRAPH_PERMANENT_TOKEN
