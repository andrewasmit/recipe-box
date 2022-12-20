import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeBox({ recipeData, search }){

    const recipesToDisplay=recipeData.filter(result=>result.name.toLowerCase().includes(search.toLowerCase()))
    .map(recipe=>{
        return <RecipeCard 
                    key={recipe.id} 
                    id={recipe.id} 
                    name={recipe.name} 
                    meal={recipe.meal} 
                    image={recipe.image} 
                    notes={recipe.notes} 
                    status={recipe.status} 
                    effort={recipe.effort}
                    link={recipe.link}
                />
    })

console.log(recipeData)

    // Return of JSX
    return(
        <div id ="recipe-box" className="container">
            <p>MY RECIPE BOX</p>
            {recipesToDisplay}
        </div>
    )
}

export default RecipeBox;