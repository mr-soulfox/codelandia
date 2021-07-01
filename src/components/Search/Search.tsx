import { useEffect, useState } from 'react'
import searchIcon from '../../assets/search.svg'
import { get } from '../../services/database/get'
import { useDebounce } from '../../hook/useDebounce'
import './style/search.scss'

export function Search() {
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(searchNotices, 500)

    async function searchNotices() {
        if (search.trim() !== '') {
            const [data, error] = await get(search)

            console.log(data, error)
        }
    }

    useEffect(() => {
        debouncedSearch()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    return (
        <div className="header-search">
            <img src={searchIcon} alt="Search icon" />
            <input type="text" value={search} onChange={(ev) => setSearch(ev.target.value)} placeholder="Pesquise no blog" className="search-box"/>
        </div>
    )
}
