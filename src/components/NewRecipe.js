import React, { useState, useEffect } from "react";

function NewRecipe(){

    const [title, setTitle] = useState("")
    const [imgLink, setImgLink] = useState("")
    const [recipeLink, setRecipeLink] = useState("")
    const [effort, setEffort] = useState("--Select an Option--")
    const [meal, setMeal] = useState("--Select an Option--")
    const [status, setStatus] =useState("--Select an Option--")
    const [notes, setNotes] = useState("")

    function handleFormSubmit(e){
        e.preventDefault();
        const newRecipe={
            effort: effort,
            name: title,
            notes:[
                notes
            ],
            status: status,
            meal: meal,
            image: imgLink,
            link: recipeLink,
        };
        console.log(newRecipe);
    }

    // console.log(notes);

    // Return JSX
    return(
        <div id ="add-new-recipe" className="container">
            <p>ADD NEW RECIPE</p>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Title:
                    <input value={title} onChange={e=>setTitle(e.target.value)} type="text" name="title" />
                </label>
                <br></br>
                <label>
                    Link to Image:
                    <input value={imgLink} onChange={e=>setImgLink(e.target.value)} type="text" name="image" />
                </label>
                <br></br>
                <label>
                    Link to Full Recipe:
                    <input value={recipeLink} onChange={e=>setRecipeLink(e.target.value)} type="text" name="link" />
                </label>
                <br></br>
                <label>
                    Effort :
                    <select value ={effort} onChange={e=>setEffort(e.target.value)} name="effort" >
                        <option disabled>--Select an Option--</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </label>
                <br></br>
                <label>
                    Meal :
                    <select value ={meal} onChange={e=>setMeal(e.target.value.toLowerCase())} name="Meal" >
                        <option disabled>--Select an Option--</option>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Side</option>
                        <option>Dessert</option>
                    </select>
                </label>
                <br></br>
                <label>
                    Status :
                    <select value={status} onChange={e=>setStatus(e.target.value.toLowerCase())} name="status" >
                        <option disabled>--Select an Option--</option>
                        <option>Repeat</option>
                        <option>Need to try it</option>
                        <option>Meh</option>
                    </select>
                </label>
                <br></br>
                <label>
                    Notes: (optional)
                    <input value={notes} onChange={e=>setNotes(e.target.value)} type="text" name="notes" />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NewRecipe;