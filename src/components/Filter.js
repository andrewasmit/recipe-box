import React from "react";

function Filter({ categorySelect, setCategorySelect }){
    return(
        <div id= "filter">
            <label>Filter by Category</label>
                <select value={categorySelect }onChange={e=>setCategorySelect(e.target.value)}>
                    <option>All</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Side</option>
                    <option>Dessert</option>
                </select>
        </div>
    )
}

export default Filter;