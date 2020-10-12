import React, { Component } from 'react';
import './Home.css';
import Nav from '../Nav';
import App from '../App';
import { Router } from '@reach/router';
import Footer from '../Footer';
import Movie from '../Movie';
import NotFound from '../NotFound';
import GenresRow from '../GenresRow';

// import {
//   BrowserRouter as Router,
// //   Switch,
//   Route,
// //   Link
// } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <>
            {/* <div className="home">
                
                <Nav />
                <App />
            </div> */}
            {/* <Fragment>
                <Nav />
                <Route path="/" exact component={App} />


            </Fragment> */}
            <Nav />
            <Router>
                <App path="/" />
                <Movie path="/detail:movieId" />
                <GenresRow path="/:genreId" />
                                
                <NotFound default />
            </Router>
            <Footer />
            </>
        )
    }
}
