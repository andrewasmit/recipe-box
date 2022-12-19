import React from "react";
import Recipe from "./Recipe";

function RecipeContainer({ apiRecipes }){

    const base=apiRecipes.baseUri

    const recipesToDisplay=apiRecipes.results.map(recipe=>{
        return <Recipe 
                    key={recipe.id} 
                    id={recipe.id} 
                    name={recipe.title} 
                    image={base + recipe.image} 
                    effort={recipe.readyInMinutes}
                    link={recipe.sourceUrl}
                />
    })

    return(
        <div id="recipe-container" className="container">
            <p>RECIPE CONTAINER</p>
            {recipesToDisplay}
        </div>
    )
}

export default RecipeContainer;