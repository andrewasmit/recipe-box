import React, {useState} from "react";

function Recipe({ id, name, image, status, meal, notes, effort, link }){

    const [showMore, setShowMore] = useState(false);

    const noteLis= notes.map(n=>{
        return <li key={n}>{n}</li>
    })

    function handleShowMore(){
        console.log('Show More for: ', id, showMore);
        setShowMore(!showMore)
    }

    const effortEmojis = [...Array(effort)].map(e=>"⏰ ")

    return(
        <div id={id}>
            <h2>{name}</h2>
            <img src={image} alt={name} className="img-card"></img>
            <br></br>
            <a href={link} target="_blank">Full Recipe</a>
            <br></br>
            <button onClick={handleShowMore}>Show More Details</button>
            <div hidden={ showMore ? null : "disabled"} id="show-more">
                <h3>Meal: {meal}</h3>
                <h4>Effort to Prepare: {effortEmojis}</h4>
                <h4>Status of Recipe: {status}</h4>
                <h4>Notes: </h4>
                <ul>
                    {noteLis}
                </ul>
            </div>
        </div>
    )
}


export default Recipe;