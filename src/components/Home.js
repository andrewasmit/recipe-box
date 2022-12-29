import React, {useEffect} from "react";

function Home(){

    useEffect(()=>{
        const slides = document.getElementsByClassName('slide')
        console.log(slides);
        Array.from(slides).forEach((slide, idx) => {
            slide.style.transform = `translateX(${idx * 100}%)`;
          });

          let curSlide = 0;

// select next slide button
const nextSlide = document.getElementById("next-slide");

// add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
     curSlide++;

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

    },[]);


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