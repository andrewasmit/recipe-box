import React from "react";
import Search from "./Search";
import Filter from "./Filter";

function Header(){
    return(
        <div className="App-header">
            <h1>Recipe Box</h1>
            <h3>The Place to Keep your Food Blogs</h3>
            <Search />
            <Filter />
        </div>
    )
}

export default Header;