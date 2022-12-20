import React from "react";
import { Switch, Route} from 'react-router-dom'
import Search from "./Search";
import NavBar from "./NavBar";
import Filter from "./Filter";

function Header({ search, setSearch, categorySelect, setCategorySelect }){

    return(
        <div className="App-header">
            <h1>Recipe Box</h1>
            <NavBar />
            <Switch>
                <Route exact path="/recipe-box">
                    <Search search={search} setSearch={setSearch} />
                    <Filter categorySelect={categorySelect} setCategorySelect={setCategorySelect}/>
                </Route>
                <Route exact path="/recipes">
                    <Search search={search} setSearch={setSearch} />
                </Route> 
            </Switch>
        </div>
    )
}

export default Header;