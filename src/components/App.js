import React, { useEffect, useState } from 'react';
import '../index.css';
import Header from './Header';
import MainContainer from './MainContainer';

function App() {

  const [recipeData, setRecipeData] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:3000/recipes")
    .then(res=>res.json())
    .then(data=>setRecipeData(data))
}, [])

console.log(recipeData)

// Return JSX
  return (
    <div className="App">
      <Header />
      <MainContainer recipeData={recipeData}/>
    </div>
  )
}

export default App;