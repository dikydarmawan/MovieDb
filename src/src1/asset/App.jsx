import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Genres from './Genres';
import Footer from './Footer';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

//   const [searchTerm, setSearchTerm] = useState('');

//   const searchMovies =  search => {
//     const endpoint = search ? requests.fetchSearch + search : requests.fetchTrending;
//     setSearchTerm(search); 
//     return endpoint;
// }

  return (
    <div className="App">
      {/* <header className="App-header">
      <h1> Router</h1>
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/detail" >Detail</Link></li>
        </ul>
        {searchTerm? "My List Movie" : "Search Result"}
        <Switch>
          <Route path="/about">
          <About />
          </Route>
          <Route path="/detail">
          <Detail />
          </Route>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
        </Router>
      </header> */}

      <Banner />
      <Genres genre="Movie Genre" fetchUrl={requests.fetchGenres}/>
      <Row title="My List Movie" fetchUrl={requests.fetchTrending} />
      <Footer />
      
    </div>
  );
}

export default {App};
