import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Avatar } from "@material-ui/core";
import SearchBar from './SearchBar';
// import axios from './axios';
// import Row from './Row';

// const search_api = 
//     "https://api.themoviedb.org/3/search/movie?&api_key=18f6e9943fc4b4d799ed4b458576533f&query=";

function Nav() {
    // const [movies, setMovies] = useState([]);
    const [show, handleShow] = useState(false);
    // const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    // const handleOnSubmit = (e) => {
    //     e.preventDefault();

    //     fetch(search_api+searchTerm)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setMovies(data.results);
    //     })
    // };

    // const handleOnChange = (e) => {
    //     setSearchTerm(e.target.value);
    // };

    return (
        <div className={`nav ${show && "nav__black"}`}>
    {/* <Router>     
        <Switch>
          <Route path="/about">
          <About />
          </Route>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
        <ul>
          <li><Link to="/">Home</Link></li>          
          <li><Link to="/about" >About</Link></li>
        </ul>
        </Router> */}
        <div className="nav__left"> 
        <h1> My Movie List</h1>
        </div>
        <div className="nav__search"> 
        <SearchBar />
        </div>
        <div className="nav__right"> 
        <Avatar className="nav__avatar" alt="user" />
        </div>
        </div>
    )
}

export default Nav
