import React from "react";

function Search(){
    return(
        <div id = "search-bar">
            <label>Search Recipes</label>
            <input id="search" type ="text"></input>
            <span id="filter">
                <label>Filter by Category</label>
                <select>
                    <option>OPTION 1</option>
                    <option>OPTION 2</option>
                    <option>OPTION 3</option>
                </select>
            </span>
        </div>
    )
}

export default Search;