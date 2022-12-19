import React from "react";
import { Switch, Route } from "react-router-dom";
import RecipeBox from "./RecipeBox";
import RecipeContainer from "./RecipeContainer";
import Home from "./Home";
import NewRecipe from "./NewRecipe";

function MainContainer(){
    return(
        <div id="main-container" className="main-container">
            <p>MAIN CONTAINER</p>
            <Switch>
                <Route exact path="/recipes">
                    <RecipeContainer />
                </Route>
                
                <Route>
                    <RecipeBox exact path="/recipe-box"/>
                </Route>
                <Route>
                    <Home exact path="/"/>
                </Route>
            </Switch>
        </div>
    )
}

export default MainContainer;