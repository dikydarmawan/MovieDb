import React, { Fragment, useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import { Link } from "@reach/router";

const API_KEY = "18f6e9943fc4b4d799ed4b458576533f";
const base_url = "https://image.tmdb.org/t/p/original/";

function GenresRow({genreId}) {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genreId}`);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);
    return (
        <div className="row">
        
  
        <div className="row__posters">
          {movies.map((movie) => (
            <Fragment>
              <div className="movie__container">
                <Link to={`details/${movie.id}`}>
                  <img
                    key={movie.id}
                    className="row__poster"
                    src={`${base_url}${movie.poster_path}`}
                    alt={movie.title}
                  />
                </Link>
                <div className="more__info">
                  <h3 className="judul__poster">
                    {movie?.title || movie?.name || movie?.original_name}
                  </h3>
                  <span>{movie.vote_average}</span>
                </div>
              </div>
            </Fragment>
          )
          )}
        </div>
      </div>
    )
}

export default GenresRow
