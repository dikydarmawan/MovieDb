import React, { useState, useEffect } from 'react';
// import About from './pages/About';
// import Home from './pages/Home';
import './Nav.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import SearchBar from './SearchBar';
import { Link } from '@reach/router';
import Logo from './assets/logo.png';


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
        <Link to="/">
        <img className="logo" src={Logo} alt="logo"/>
        </Link>
        </div>
        <div > 
        <SearchBar />
        </div>
        <div className="nav__right"> 
        <Avatar className="nav__avatar" alt="user" />
        </div>
        </div>
    )
}

export default Nav
