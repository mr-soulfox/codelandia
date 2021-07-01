import { useState } from 'react'
import searchIcon from '../../assets/search.svg'
import './style/search.scss'

export function Search() {
    const [search, setSearch] = useState('')

    return (
        <div className="header-search">
            <img src={searchIcon} alt="Search icon" />
            <input type="text" value={search} onChange={(ev) => setSearch(ev.target.value)} placeholder="Pesquise no blog" className="search-box"/>
        </div>
    )
}
