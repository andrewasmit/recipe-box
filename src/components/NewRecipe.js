import React from "react";

function NewRecipe({ 
        onNewRecipeSubmit,
        title,
        setTitle,
        effort,
        setEffort,
        imgLink,
        setImgLink,
        notes,
        setSearch,
        setNotes,
        status,
        setStatus,
        meal,
        setMeal,
        recipeLink,
        setRecipeLink
     }){


    function handleFormSubmit(e){
        e.preventDefault();
        const newRecipe={
            name: title,
            image: imgLink,
            status: status.toLowerCase(),
            effort: parseInt(effort),
            meal: meal.toLowerCase(),
            notes:[
                notes
            ],
            link: recipeLink,
        };
        fetch("http://localhost:3000/recipes",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newRecipe)
        })
        .then(res=>res.json())
        .then(data=>onNewRecipeSubmit(data))
        console.log(newRecipe)
        setTitle("")
        setImgLink("")
        setRecipeLink("")
        setEffort("--Select an Option--")
        setMeal("--Select an Option--")
        setStatus("--Select an Option--")
        setNotes("")
        setSearch("")
    }


    // Return JSX
    return(
        <div id ="add-new-recipe" className="add-new-recipe">
            <h2>ADD NEW RECIPE</h2>
            <form onSubmit={handleFormSubmit}>
                <label>
                    {/* Title: */}
                    <input value={title} onChange={e=>setTitle(e.target.value)} type="text" name="title" placeholder="Title" className="text-input"/>
                </label>
                <br></br>
                <label>
                    {/* Link to Image: */}
                    <input placeholder="Link to Image" value={imgLink} onChange={e=>setImgLink(e.target.value)} type="text" name="image" className="text-input"/>
                </label>
                <br></br>
                <label>
                    {/* Link to Full Recipe: */}
                    <input placeholder="Link to Full Recipe" value={recipeLink} onChange={e=>setRecipeLink(e.target.value)} type="text" name="link" className="text-input"/>
                </label>
                <br></br>
                <label>
                    {/* Effort : */}
                    <select value ={effort} onChange={e=>setEffort(e.target.value)} name="effort" className="dropdown">
                        <option disabled>--Select Effort Level--</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </label>
                <br></br>
                <label>
                    {/* Meal : */}
                    <select value ={meal} onChange={e=>setMeal(e.target.value)} name="Meal" className="dropdown">
                        <option disabled>--Select Meal--</option>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Side</option>
                        <option>Dessert</option>
                    </select>
                </label>
                <br></br>
                <label>
                    {/* Status : */}
                    <select value={status} onChange={e=>setStatus(e.target.value)} name="status" className="dropdown">
                        <option disabled>--Select Status of Recipe--</option>
                        <option>Repeat</option>
                        <option>Need to try it</option>
                        <option>Meh</option>
                    </select>
                </label>
                <br></br>
                <label>
                    {/* Notes: (optional) */}
                    <input placeholder= "Notes (optional)" value={notes} onChange={e=>setNotes(e.target.value)} type="text" name="notes" className="text-input"/>
                </label>
                <br></br>
                <input type="submit" value="Submit" id="new-submit-btn"/>
            </form>
        </div>
    )
}

export default NewRecipe;