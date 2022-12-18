import React from "react";
import RecipeBox from "./RecipeBox";
import RecipeContainer from "./RecipeContainer";

function MainContainer(){
    return(
        <div id="main-container" className="main-container">
            <p>MAIN CONTAINER</p>
            <RecipeContainer />
            <RecipeBox />
        </div>
    )
}

export default MainContainer;