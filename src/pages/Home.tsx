import { Search } from '../components/Search/Search'
import { Cards } from '../components/Cards/Cards'
import { get } from '../services/database/get'
import { useContext, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from '../providers/search'
import { useDebounce } from '../hook/useDebounce'
import './styles/home.scss'

export function Home() {
    const [dataFromDb, setDataFromDb] = useState<any>([])  
    const { searchValue } = useContext(SearchContext)
    const debouncedSearch = useDebounce(searchNotices, 500)
    
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
            <header>
                <div className="header-box">
                    <div className="header-top-spans">
                        <span title="Discord">
                            <a href="https://discord.gg/AKj5RnnCjP" target="_blank" rel="noreferrer">Codelândia</a>
                        </span>

                        <span>
                            <Link to="/">Blog</Link>
                        </span>
                    </div>

                    <div className="header-search-box">
                        <Search />
                    </div>
                </div>
            </header>

            <main>
                <div className="main-box">
                    {dataFromDb.map((value) => {
                        return (
                            <Cards info={value}/>
                        )
                    })}
                </div>
            </main>         
        </div>
    )
}
