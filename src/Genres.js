import React, { useState, useEffect } from 'react';
import axios from "./axios";
import './Genres.css';

function Genres({genre, fetchUrl}) {
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
                     <button className="btn-list" type='button'>{genre.name}</button>
                 </ul>
                )
                
                )}
                
            </div>
                        
        </div>
    )
}

export default Genres
