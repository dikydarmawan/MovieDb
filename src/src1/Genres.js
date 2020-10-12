import React, { useState, useEffect } from 'react';
import axios from "./axios";
import './Genres.css';
import { Link } from '@reach/router';

function Genres({genre, fetchUrl}, index) {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setGenres(request.data.genres);
            console.log(request);
            return request;
        }
        fetchData();
    }, [fetchUrl])
    return (
        <div className='row__genre'>
            <h2>{genre}</h2>
            <div className='genre__list'>
                {genres.map((genre, index) => (
                 <ul className='genre__ul' key={index}>
                     <Link to={`/${genre.id}`}>
                     <button className="btn-list" type='button'>{genre.name}</button>
                     </Link>
                 </ul>
                )
                
                )}
                
            </div>
                        
        </div>
    )
}

export default Genres
