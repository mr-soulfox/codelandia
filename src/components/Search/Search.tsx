import { useContext, useEffect, useState } from 'react'
import searchIcon from '../../assets/search.svg'
import { SearchContext } from '../../providers/search'
import './style/search.scss'

export function Search() {
    const [search, setSearch] = useState('')
    const { setSearchValue } = useContext(SearchContext)

    useEffect(() => {
        setSearchValue(search)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    return (
        <div className="header-search">
            <img src={searchIcon} alt="Search icon" />
            <input type="text" value={search} onChange={(ev) => setSearch(ev.target.value)} placeholder="Pesquise no blog" className="search-box"/>
        </div>
    )
}
