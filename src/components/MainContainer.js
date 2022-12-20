import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import RecipeBox from "./RecipeBox";
import RecipeContainer from "./RecipeContainer";
import Home from "./Home";
import NewRecipe from "./NewRecipe";

function MainContainer({ recipeData, apiRecipes, search, categorySelect, onNewRecipeSubmit }){


    // Return of JSX
    return(
        <div id="main-container" className="main-container">
            <p>MAIN CONTAINER</p>
            <Switch>
                <Route exact path="/recipes">
                    <RecipeContainer apiRecipes={apiRecipes} search={search}/>
                </Route>
                <Route exact path="/recipe-box">
                    <RecipeBox recipeData={recipeData} search={search} categorySelect={categorySelect}/>
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/add-recipe">
                    <NewRecipe onNewRecipeSubmit={onNewRecipeSubmit}/>
                </Route>
                <Route path="*">
                    <h1>Error 404  Page Not Found</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default MainContainer;