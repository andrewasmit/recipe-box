import React, {useState} from "react";

function Recipe({ 
        id, 
        name, 
        image, 
        status, 
        meal, 
        notes, 
        effort, 
        link, 
        onDeleteFromBox,  
    }){

    
    // State of 'Show More Details' button toggle
    const [showMore, setShowMore] = useState(false);

    // create li's for the 'Notes' section
    const noteLis= notes.map(n=>{
        return <li key={n}>{n}</li>
    })

    // Convert the 1-5 scale into # of Clock Emojis to display
    const effortEmojis = [...Array(effort)].map(()=>"⏰ ")

    // handles the backend fetch & passes ID up to App.js to render the DOM appropriately
    function handleDeleteFromBox(){
        onDeleteFromBox(id)
        fetch(`http://localhost:3000/recipes/${id}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>console.log(data));
    }

    function handleUpdateRecipe(){
        console.log(id);
    }


    // Return JSX
    return(
        <div id={id}>
            <h2>{name}</h2>
            <img src={image} alt={name} className="img-card"></img>
            <h4>Effort to Prepare: {effortEmojis}</h4>
            <a href={link} target="_blank">Full Recipe</a>
            <br></br>
            <button onClick={()=>setShowMore(!showMore)}>Show More Details</button>
            <div hidden={ showMore ? null : "disabled"} id="show-more">
                <h3>Meal: {meal}</h3>
                
                <h4>Status of Recipe: {status}</h4>
                <h4>Notes: </h4>
                <ul>
                    {noteLis}
                </ul>
                <button onClick={handleUpdateRecipe}>Edit Details</button>
                <br></br>
                <button onClick={handleDeleteFromBox}>Delete from My Recipe Box</button>
            </div>
        </div>
    )
}


export default Recipe;