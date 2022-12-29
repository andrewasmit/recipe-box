import React from "react";


function Home(){
    return(
        <div id ="home" >
            <h2>WELCOME</h2>
            <div id="home-slider">
                <div className="slide" id="slide-1">
                    <img src="1main.jpg" alt="cooking picture" />
                </div>
                <div className="slide" id="slide-2">
                    <img src="2main.jpg" alt="cooking picture" />
                </div>
                <div className="slide" id="slide-3">
                    <img src="3main.jpg" alt="cooking picture" />
                </div>
                <button className="slider-btn" id="prev-slide">Previous</button>
                <button className="slider-btn"id="next-slide">Next</button>
            </div>
        </div>
    )
}

export default Home;