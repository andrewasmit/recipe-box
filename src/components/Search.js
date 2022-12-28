import React from "react";

function Search({ setSearch, search }){


    // Return JSX
    return(
        <div id = "search-bar" >
            <label>Search Recipes</label>
            <input id="search" type ="text" value={search} onChange={e=>setSearch(e.target.value.toLowerCase())}className="searchBar"></input>
        </div>
    )
}

export default Search;