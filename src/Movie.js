import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Banner.css";

const API_KEY = "18f6e9943fc4b4d799ed4b458576533f";

function Movie({ movieId }) {
    console.log('movie id', movieId)
  const [movie, setMovies] = useState([]);
//   const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`movie/${movieId}?&api_key=${API_KEY}`);
      setMovies(request.data);
      console.log(request);
      return request;
    }

    fetchData();
  }, []);

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
//       setCasts(request.data);
//       console.log(request);
//       return request;
//     }

//     fetchData();
//   }, []);

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          <h1 className=".banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          <h1 className="banner__description">{movie?.overview}</h1>
            {/* {casts.map((cast, index) => (
            <div key={index}><p>{ cast?.name }</p></div>
            ))} */}
            
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </div>
  );
}

export default Movie;
