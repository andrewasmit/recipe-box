import React from "react";

function NewRecipe(){


    return(
        <div id ="add-new-recipe" className="container">
            <p>ADD NEW RECIPE</p>
            <form>
                <label>
                    Title:
                    <input type="text" name="title" />
                </label>
                <br></br>
                <label>
                    Link to Image:
                    <input type="text" name="image" />
                </label>
                <br></br>
                <label>
                    Link to Full Recipe:
                    <input type="text" name="link" />
                </label>
                <br></br>
                <label>
                    Effort :
                    <select name="effort" defaultValue="--Select an Option--">
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
                    <select name="Meal" defaultValue="--Select an Option--">
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
                    <select name="status" defaultValue="--Select an Option--">
                        <option disabled>--Select an Option--</option>
                        <option>Repeat</option>
                        <option>Need to try it</option>
                        <option>Meh</option>
                    </select>
                </label>
                <br></br>
                <label>
                    Notes: (optional)
                    <input type="text" name="notes" />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default NewRecipe;