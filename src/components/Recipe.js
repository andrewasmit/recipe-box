import React from "react";

function Recipe({ id, name, image, status, meal, notes, effort, link }){

    const noteLis= notes.map(n=>{
        return <li key={n}>{n}</li>
    })

    return(
        <div id={id}>
            <h2>{name}</h2>
            <img src={image} alt={name} className="img-card"></img>
            <h3>Meal: {meal}</h3>
            <h4>Effort to Prepare: {effort}</h4>
            <h4>Status of Recipe: {status}</h4>
            <h4>Notes: </h4>
            <ul>
                {noteLis}
            </ul>
            <a href={link}>Full Recipe</a>
        </div>
    )
}


export default Recipe;