import React from "react";
import Recipe from "./Recipe";

function RecipeBox({ recipeData }){

    const recipesToDisplay=recipeData.map(recipe=>{
        return <Recipe 
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


    return(
        <div id ="recipe-box" className="container">
            <p>MY RECIPE BOX</p>
            {recipesToDisplay}
        </div>
    )
}

export default RecipeBox;