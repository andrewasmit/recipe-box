import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeBox({ 
    recipeData, 
    search, 
    categorySelect, 
    onDeleteFromBox,
    setTitle,
    setImgLink,
    setRecipeLink,
    setEffort,
    setMeal,
    setStatus,
    setNotes
 }){


    const recipesToDisplay= recipeData.filter(recipe=>{
        if(categorySelect==="All"){
            return true
        } if (recipe.meal.toLowerCase()===categorySelect.toLowerCase()){
            return true
        }})
    .filter(result=>result.name.toLowerCase().includes(search.toLowerCase()))
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
                    onDeleteFromBox={onDeleteFromBox}
                    setTitle={setTitle}
                    setImgLink={setImgLink}
                    setRecipeLink={setRecipeLink}
                    setEffort={setEffort}
                    setMeal={setMeal}
                    setStatus={setStatus}
                    setNotes={setNotes}
                />
    })

 
   
    // Return of JSX
    return(
        <div id ="recipe-box" className="container">
            <p>MY RECIPE BOX</p>
            {recipesToDisplay}
        </div>
    )
}

export default RecipeBox;