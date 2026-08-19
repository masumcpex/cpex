import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zuzspxigzkatahmtopxa.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'Sb_publishable_MdePy9Or5nOyV-e7y6Cemg_PqOTOQ8Z'

export const supabase = createClient(supabaseUrl, supabaseKey)
