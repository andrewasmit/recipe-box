import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import RecipeBox from "./RecipeBox";
import RecipeContainer from "./RecipeContainer";
import Home from "./Home";
import NewRecipe from "./NewRecipe";

function MainContainer({ recipeData, apiRecipes, search, categorySelect, onNewRecipeSubmit, onDeleteFromBox, setSearch }){
    const history=useHistory();

    // The State of NewForm inputs
    const [title, setTitle] = useState("")
    const [imgLink, setImgLink] = useState("")
    const [recipeLink, setRecipeLink] = useState("")
    const [effort, setEffort] = useState("--Select an Option--")
    const [meal, setMeal] = useState("--Select an Option--")
    const [status, setStatus] =useState("--Select an Option--")
    const [notes, setNotes] = useState("")

    // Auto-populating the NewRecipe form data upon click
    function onAddRecipeClick(id){
        console.log("In MainContainer: ", id)
        const base= apiRecipes.baseUri;
        const target=apiRecipes.results.filter(rec=>rec.id === id);
        setMeal("--Select an Option--")
        setTitle(target[0].title)
        setNotes("")
        setImgLink(base + target[0].image)
        setRecipeLink(target[0].sourceUrl)
        setStatus("Need to try it")
        setEffort(()=>effortAmount(target[0].readyInMinutes))
        history.push("/add-recipe")
    }

// Translate 'readyInMinutes' from API data to a 1-5 scale for ⏰
    function effortAmount(time){
        if (time <10){
            return 1;
        } if (time >=10 && time<=20){
            return 2
        } if (time >20 && time <=30){
            return 3
        }if (time >30 && time <=45){
            return 4
        } else return 5
    }

    // Return of JSX
    return(
        <div id="main-container" className="main-container">
            <p>MAIN CONTAINER</p>
            <Switch>
                <Route exact path="/recipes">
                    <RecipeContainer 
                        apiRecipes={apiRecipes} 
                        search={search}
                        onAddRecipeClick={onAddRecipeClick}
                        effortAmount={effortAmount} 
                    />
                </Route>
                <Route exact path="/recipe-box">
                    <RecipeBox 
                        recipeData={recipeData} 
                        search={search} 
                        categorySelect={categorySelect}
                        onDeleteFromBox={onDeleteFromBox}
                        setTitle={setTitle}
                        setImgLink={setImgLink}
                        setRecipeLink={setRecipeLink}
                        setEffort={setEffort}
                        setMeal={setMeal}
                        setStatus={setStatus}
                        setNotes={setNotes}
                    />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/add-recipe">
                    <NewRecipe 
                        onNewRecipeSubmit={onNewRecipeSubmit}
                        title={title}
                        setTitle={setTitle}
                        imgLink={imgLink}
                        setImgLink={setImgLink}
                        recipeLink={recipeLink}
                        setRecipeLink={setRecipeLink}
                        effort={effort}
                        setEffort={setEffort}
                        meal={meal}
                        setMeal={setMeal}
                        status={status}
                        setStatus={setStatus}
                        notes={notes}
                        setNotes={setNotes}
                        setSearch={setSearch}
                    />
                </Route>
                <Route path="*">
                    <h1>Error 404  Page Not Found</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default MainContainer;