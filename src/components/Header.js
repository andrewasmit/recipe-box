import React from "react";
import { Switch, Route} from 'react-router-dom'
import Search from "./Search";
import NavBar from "./NavBar";
import Filter from "./Filter";

function Header({ search, setSearch, categorySelect, setCategorySelect }){

    return(
        <div className="App-header">
            <div id='logo-header'>
                {/* <img src=".../public/recipe-book-logo.png" alt='logo' /> */}
                <img alt="logo" src="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADW0lEQVRoge2aW4hMcRzHv4dlrEUue5F9oNx2srknyZOkeFFEacvjRuJBeZFXDzzJyyaPUiIRSUkUibWR2cWuIrfaEuuyLoXVx8P5TY4x55yZc/acmbTfl5nzu53vd36/8z9z5j/SCKoLTlgAkJHULqlNUqukuqRJBcFxnKKca4KSgGZJlyQtSoJUKgAywANc9AIbgYkV5ANAlMQ9HhGTE+BWLp/IQjotd2MCvMpGHCGfLbdi4+RFHCHREhNCGJ9RMYsfBvqB1WXm1QI7gWuW/x3oAjbF4eN3ssBPANjEHwwCq0qsuw54hT82R+ETR8h1C3lmr5+AlSE1twE/LT4HtAONwHhgv9nvpy1k0EJmAift/UdghU/8fOCLxR0Bxhb4a803BPxz905SSH5VawRGA6fs+AOwvEh8h/mP+9Sbav5vaQu5aSE77LgGOGO298DSgvin5mv1qddm/s4ofOII2WYhg8Ays40Bzpr9HbDYEz9g9klFatUAd82/N1UhFnPCwgbypE3MebO/zXcA6DPbwiJ1DpqvH58bcNJCxgDnipAeC1ww+2mzHbXjK8A8i2kBjpn9F7AhDp9YiUboooW/AbJmzwD7gMW4F/J9/PEV2D4cfGIlGunLnvGY6/F5RfRZB17grnrPcVezluHkEysRGGdjA9DhI2JG2UQi8omViHtT2w3MLiYCyAKHgPo0+MRLlH8ncL9kAnQDDanwiZoYNE5AE/DIfD1AY9J8oo5WsXFqAA6YiCbgMX/wEGiqKiEB47THY8t3I2cdwWyhYlIREjJOk4F7ni7kgHrrVLfZHgPTKyokSERBzA3gFp4Vy8TkShGTqBD7tLss9EkxESWcZ0opNRITMhwiPLUKxTSXyyeoeJiQG0HjFOF80zwj2kPBw1UYnzi/ogxJ6pa0xnGc/hh1JEmO4wxIWivpttUeHkRuZUJIsiNVhREh1Yb/RkjgjpUkARMk7ZK0RVJW0vikSUWB7x6iZ4V4IWlWOnTC4beH6Av+xh1gPRGe7CoOj4irQOgIVi08QrKV5hILwA8Tkqk0l1IQtPy+tNclaRBJDLg/24C7115baT6RYc8Ir01ML+5WW+DjaCURuCbbhX5B0px06ITD7z5Syp9q6iTtkLRV0gJV6Z9qRlBt+A3ZxWztNn7nfgAAAABJRU5ErkJggg==" />                <h1>Recipe Box</h1>
            </div> 
            
            <NavBar />
            <Switch>
                <Route exact path="/recipe-box">
                    <Search search={search} setSearch={setSearch} />
                    <Filter categorySelect={categorySelect} setCategorySelect={setCategorySelect}/>
                </Route>
                <Route exact path="/recipes">
                    <Search search={search} setSearch={setSearch} />
                </Route> 
            </Switch>
        </div>
    )
}

export default Header;