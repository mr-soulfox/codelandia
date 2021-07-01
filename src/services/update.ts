import { connect } from './connect'

export async function update(id: string | number, add: boolean) {
    const connection = await connect()
    
    const { data } = await connection.from('News').select('like').eq('id', id)

    const { error } = await connection.from('News').update({ like: Number(add ? data[0].like + 1 : data[0].like - 1) }).eq('id', id)
    
    return error
}
