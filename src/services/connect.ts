import { createClient, SupabaseClient } from '@supabase/supabase-js'

export async function connect() {
    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || ''
    const supabaseKey = process.env.REACT_APP_SUPABASE_KEY || ''

    const connection: SupabaseClient = createClient(
       supabaseUrl, 
       supabaseKey
    )        

    return connection
}
