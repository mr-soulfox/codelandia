import { createContext, useState } from "react";

type SearchType = {
    searchValue: string;
    setSearchValue: Function;
}

export const SearchContext = createContext({} as SearchType)

export function SearchProvider(props) {

    const [searchValue, setSearchValue] = useState('')

    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>   
            {props.children}
        </SearchContext.Provider>
    )
}
