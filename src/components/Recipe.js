import React from "react";


function Recipe({ id, name, image, effort, link, onAddRecipeClick, effortAmount }){

    function handleAddToClick(){
        onAddRecipeClick(id)
    }

    const effortEmojis = [...Array(effortAmount(effort))].map(()=>"⏰")

    return(
        <div id={id} >
            <h2>{name}</h2>
            <img src={image} alt={name}className="img-card"></img>
            <h3>Effort to Prepare: {effortEmojis}</h3>
            <br></br>
            <a href={link} target="_blank">Go to Full Recipe</a>
            <br></br>
            <button onClick={handleAddToClick}>Add to My Recipe Box!</button>
        </div>
    )
}

export default Recipe;