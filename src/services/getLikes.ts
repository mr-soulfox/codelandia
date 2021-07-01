import { connect } from "./connect";

export async function getLikes(id: string | number) {
    const supabase = await connect()
    
    const { data, error } = await supabase.from('News').select('like').eq('id', id)

    return [data, error]
}