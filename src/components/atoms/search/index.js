import React from 'react'
import './search.css'
const Search = () => {
    return (
        <form>
            <input class="search" type="text" placeholder="Cari..." required></input>
            <input class="seacrhBtn" type="button" value="Cari"></input>	
        </form>
    )
}

export default Search
