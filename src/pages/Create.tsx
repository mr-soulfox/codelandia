import { Helmet } from "react-helmet"
import { FormEvent, useState } from 'react'
import { create } from '../services/database/create'
import toast, { Toaster } from "react-hot-toast"
import { Link } from "react-router-dom"
import './styles/create.scss'

export function Create() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [date, setDate] = useState('2021-04-05')

    function setAll() {
        setTitle('')
        setDesc('')
    }

    async function createNotice(event: FormEvent) {
        event.preventDefault()

        const info = {
            Title: title,
            Description: desc,
            Date: date
        }

        setAll()

        const loadToastId = toast.loading('Salvando...', {
            position: 'top-center'
        })

        const error = await create(info)

        toast.dismiss(loadToastId)

        if (error != null) {
            toast.error('Erro interno', {
                duration: 3000,
                position: 'top-center'
            })

        } else {
            toast.success('Noticia salva com sucesso', {
                duration: 3000,
                position: 'top-center'
            })

            window.location.replace('/')
        }
    }

    return (
        <>
            <Toaster />
            <Helmet>
                <title>Codelândia | Criar noticia</title>
            </Helmet>
            <div className="form-container">
                <h1>Codelândia</h1>

                <div className="form-box">
                    <form onSubmit={createNotice}>
                        <label htmlFor="title">Titulo:</label>
                        <input type="text" id="title" value={title} onChange={(ev) => setTitle(ev.target.value)} required/>

                        <label htmlFor="description">Descrição:</label>
                        <textarea required id="description" value={desc} onChange={(ev) => setDesc(ev.target.value)}/>

                        <input type="date" value={date} required onChange={(ev) => setDate(ev.target.value)}/>
                        
                        <div>
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>

                <Link to="/" replace>Voltar ao blog</Link>
            </div>
        </>
    )
}