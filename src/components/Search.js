import React from "react";

function Search({ setSearch, search, categorySelect, setCategorySelect }){


    // Return JSX
    return(
        <div id = "search-bar">
            <label>Search Recipes</label>
            <input id="search" type ="text" value={search} onChange={e=>setSearch(e.target.value.toLowerCase())}></input>
            <span id="filter">
                <label>Filter by Category</label>
                <select value={categorySelect }onChange={e=>setCategorySelect(e.target.value)}>
                    <option>All</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Side</option>
                    <option>Dessert</option>
                </select>
            </span>
        </div>
    )
}

export default Search;