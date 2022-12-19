import React from "react";


function Recipe({ id, name, image, effort, link }){

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

    const effortEmojis = [...Array(effortAmount(effort))].map(()=>"⏰")

    return(
        <div id={id} >
            <h2>{name}</h2>
            <img src={image} alt={name}className="img-card"></img>
            <h3>Effort to Prepare: {effortEmojis}</h3>
            <br></br>
            <a href={link} target="_blank">Show Recipe</a>
            <br></br>
            <button>Add to My Recipe Box!</button>
        </div>
    )
}

export default Recipe;