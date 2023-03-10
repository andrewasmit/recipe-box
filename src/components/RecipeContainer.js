import React from "react";
import Recipe from "./Recipe";
import RecipeCard from "./RecipeCard";

function RecipeContainer({ apiRecipes, search, onAddRecipeClick, effortAmount }){

    const base=apiRecipes.baseUri

    const recipesToDisplay=apiRecipes.results.filter(result=>result.title.toLowerCase().includes(search.toLowerCase()))
    .map(recipe=>{
        return <Recipe 
                    key={recipe.id} 
                    id={recipe.id} 
                    name={recipe.title} 
                    image={base + recipe.image} 
                    effort={recipe.readyInMinutes}
                    link={recipe.sourceUrl}
                    onAddRecipeClick={onAddRecipeClick}
                    effortAmount={effortAmount}
                />
    })


    return(
        <div id="recipe-container" className="container">
            {recipesToDisplay}
        </div>
    )
}

export default RecipeContainer;