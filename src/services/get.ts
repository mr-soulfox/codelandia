import { connect } from "./connect";

export async function get(query: string = '') {
    const supabase = await connect()

    if (query.trim() === '') {
        const { data, error } = await supabase.from('News').select()

        return [data, error]

    } else {
        const { data, error } = await supabase.from('News').select().ilike('Title', `%${query}%`)

        return [data, error]
    }
}