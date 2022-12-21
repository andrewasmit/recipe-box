import React from "react";
import { useHistory } from "react-router-dom";

function NewRecipe({ 
        onNewRecipeSubmit,
        title,
        setTitle,
        effort,
        setEffort,
        imgLink,
        setImgLink,
        notes,
        setNotes,
        status,
        setStatus,
        meal,
        setMeal,
        recipeLink,
        setRecipeLink
     }){

    const history=useHistory();

    function handleFormSubmit(e){
        e.preventDefault();
        const newRecipe={
            name: title,
            image: imgLink,
            status: status,
            effort: effort,
            meal: meal,
            notes:[
                notes
            ],
            link: recipeLink,
        };
        
        setTitle("")
        setImgLink("")
        setRecipeLink("")
        setEffort("--Select an Option--")
        setMeal("--Select an Option--")
        setStatus("--Select an Option--")
        setNotes("")

        fetch("http://localhost:3000/recipes",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newRecipe)
        })
        .then(res=>res.json())
        .then(data=>onNewRecipeSubmit(data))
        history.push("/recipe-box")
    }



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