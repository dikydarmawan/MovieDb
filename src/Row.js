import React, { Fragment, useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    
    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row__posters'>
               
               {movies.map(movie => (
                   <Fragment><div className="movie__container"><img 
                   key={movie.id}
                   className="row__poster"
                   src={`${base_url}${movie.poster_path}`} alt={movie.title} />
                    <div className="more__info"> 
                    <h3 className="judul__poster">{movie?.title || movie?.name || movie?.original_name}</h3>
                    <span>{movie.vote_average}</span>
                    </div></div></Fragment>
               )
               
               )

               } 
               
            </div>
            
        </div>
    )
}

export default Row
