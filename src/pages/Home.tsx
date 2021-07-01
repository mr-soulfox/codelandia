import { Search } from '../components/Search/Search'
import { Cards } from '../components/Cards/Cards'
import { get } from '../services/database/get'
import { useContext, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from '../providers/search'
import { useDebounce } from '../hook/useDebounce'
import notFound from '../assets/notFound.svg'
import { Helmet } from 'react-helmet'
import './styles/home.scss'

export function Home() {
    const [dataFromDb, setDataFromDb] = useState<any>([])  
    const { searchValue } = useContext(SearchContext)
    const debouncedSearch = useDebounce(searchNotices, 300)

    async function getAllDatas() {
        const [data, error] = await get()

        if (error == null) {
            setDataFromDb(data)

        } else {
            toast.error('Erro interno, recarregue a pagina', {
                duration: 3000,
                position: 'top-center'
            })

        }
    }
    
    async function searchNotices() {  

        if (searchValue === undefined || searchValue.trim() === '') {
            getAllDatas()

            return
        }

        if (searchValue.trim() !== '') {
            const [data, error] = await get(searchValue)

            if (error != null) {
                toast.error('Erro interno', {
                    duration: 3000,
                    position: 'top-center'
                })

            } else {
                setDataFromDb(data)

            }
        }
    }


    useEffect(() => {
        debouncedSearch()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue])

    return (
        <div>
            <Toaster/> 
            <Helmet>
                <title>Codelândia | blog</title>
            </Helmet>
            <header>
                <div className="header-box">
                    <div className="header-top-spans">
                        <span title="Discord">
                            <a href="https://discord.gg/AKj5RnnCjP" target="_blank" rel="noreferrer">Codelândia</a>
                        </span>
                        
                        <div>
                            <span>
                                <Link to="/">Blog</Link>
                            </span>

                            <Link to="/create" id="create">Criar noticia</Link>
                        </div>
                    </div>

                    <div className="header-search-box">
                        <Search />
                    </div>
                </div>
            </header>

            <main>
                <div className="main-box">
                    {dataFromDb.length > 0 && dataFromDb.map((value) => {
                        return (
                            <Cards info={value}/>
                        )
                    })}

                    {dataFromDb.length <= 0 && (<img className="not-found" src={notFound} alt="Nenhum resultado encontrado" title="Nenhum resultado encontrado"/>)}
                </div>
            </main>         
        </div>
    )
}
