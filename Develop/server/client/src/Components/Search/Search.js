import React, { useState } from 'react';
import './Search.css';
const Search = ({search})=>{
    const [query , setQuery] = useState('');
    const handleSearch = () => {
        search(query)
    }
    const handldleKeyDown = (event) => {
        if (event.keyCode === 13) {
            search(query);
        }
    }
    return (
        <div className="search">
            <input type="text" value={query} placeholder="search by name..." onChange={(event)=> setQuery(event.target.value)}  onKeyDown={handldleKeyDown}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}
export default Search;