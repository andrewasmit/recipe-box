import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import RecipeBox from "./RecipeBox";
import RecipeContainer from "./RecipeContainer";
import Home from "./Home";
import NewRecipe from "./NewRecipe";

function MainContainer({ recipeData }){

    const [apiRecipes, setApiRecipes] = useState([])

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f210eecfb5mshfc612e739004a93p1bdbcbjsn591e5976f5cf',
                'X-RapidAPI-Host': 'webknox-recipes.p.rapidapi.com'
            }
        };
        
        fetch('https://webknox-recipes.p.rapidapi.com/recipes/search?query=recipe&number=100&intolerances=egg%2C%20gluten&excludeIngredients=coconut', options)
            .then(response => response.json())
            .then(response => setApiRecipes(response))
            .catch(err => console.error(err));
    }, [])

    console.log(apiRecipes);

    return(
        <div id="main-container" className="main-container">
            <p>MAIN CONTAINER</p>
            <Switch>
                <Route exact path="/recipes">
                    <RecipeContainer recipeData={recipeData}/>
                </Route>
                <Route exact path="/recipe-box">
                    <RecipeBox recipeData={recipeData}/>
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/add-recipe">
                    <NewRecipe />
                </Route>
                <Route path="*">
                    <h1>Error 404  Page Not Found</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default MainContainer;