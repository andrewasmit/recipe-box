import React from "react";
import Recipe from "./Recipe";

function RecipeContainer({ apiRecipes, search }){

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
                />
    })

    console.log("In RecipeContainer ", recipesToDisplay)

    return(
        <div id="recipe-container" className="container">
            <p>RECIPE CONTAINER</p>
            {recipesToDisplay}
        </div>
    )
}

export default RecipeContainer;