import React from 'react';
import './App.css';
// import About from './pages/About';
// import Detail from './pages/Detail';
// import Home from './pages/Home';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Genres from './Genres';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
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

    </div>
  );
}

export default App;
