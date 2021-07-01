import { connect } from "./connect";

export async function get(query: string = '') {
    const supabase = await connect()
    
    const { data, error } = await supabase.from('News').select().ilike('Title', `%${query}%`)
    return [data, error]
    
}