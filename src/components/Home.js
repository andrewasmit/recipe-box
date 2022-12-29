import React, {useEffect, useState } from "react";

function Home(){

    const [currentSlide, setCurrentSlide] = useState(0);
    // const [timer, setTimer] = useState(0);

    // Event Handler for Carousel
    function handleSlideClick(e){
        if (e.target.id === "next-slide"){
            handleNextSlide()
        }
        if (e.target.id === "prev-slide"){
            handlePrevSlide()
        }
    }

    function handleNextSlide(){
        if (currentSlide===2){
            setCurrentSlide(0)
        }
        if (currentSlide<2){
            setCurrentSlide(currentSlide+1);
        }
    }

    function handlePrevSlide(){
        if (currentSlide===0){
            setCurrentSlide(2)
        }
        if (currentSlide>0){
            setCurrentSlide(currentSlide-1);
        }        
    }


    // useEffect to grab each slide after rendering and then define their X-Axis accordingly
    useEffect(()=>{
        const slides = document.getElementsByClassName('slide')
        Array.from(slides).forEach((slide, idx) => {
            slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`;
          });
    },[currentSlide]);


    useEffect(()=>{
        const timerId = setInterval(()=>{
            handleNextSlide()
        },5000);

        return function cleanup(){
            clearInterval(timerId);
          };
    })

   

    // Return of JSX
    return(
        <div id ="home" >
            <h2>Storing and discovering recipes made easy</h2>
            <div id="home-slider">
                <div className="slide" id="slide-1">
                    <img src="1main.jpg" alt="cooking" />
                </div>
                <div className="slide" id="slide-2">
                    <img src="2main.jpg" alt="cooking" />
                </div>
                <div className="slide" id="slide-3">
                    <img src="3main.jpg" alt="cooking" />
                </div>
                <button className="slider-btn" id="prev-slide"onClick={handleSlideClick}> ← </button>
                <button className="slider-btn"id="next-slide" onClick={handleSlideClick}> → </button>
            </div>
        </div>
    )
}

export default Home;