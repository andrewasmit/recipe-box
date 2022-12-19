import { Switch, Route } from "react-router-dom"
import '../index.css';
import Header from './Header';
import MainContainer from './MainContainer';

function App() {
  

// Return JSX
  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  )
}

export default App;