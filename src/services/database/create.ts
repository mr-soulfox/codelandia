import { connect } from "./connect";

type dataType = {
    Title: string;
    Description: string;
    Date: string;
}

export async function create(data: dataType) {
    const supabase = await connect()

    const { error } = await supabase.from('News').insert([data])

    return error
}
