import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import NavBar from "./NavBar";

function Header(){
    return(
        <div className="App-header">
            <h1>Recipe Box</h1>
            <NavBar />
            <Search />
            <Filter />
        </div>
    )
}

export default Header;