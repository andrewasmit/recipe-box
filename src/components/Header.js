import React from "react";
import Search from "./Search";
import NavBar from "./NavBar";

function Header({ search, setSearch, categorySelect, setCategorySelect }){

    return(
        <div className="App-header">
            <h1>Recipe Box</h1>
            <NavBar />
            <Search 
                search={search} 
                setSearch={setSearch} 
                categorySelect={categorySelect}
                setCategorySelect={setCategorySelect}
            />
        </div>
    )
}

export default Header;