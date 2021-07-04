import React from 'react'

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

function Movie({ title, poster_path, vote_average, overview}) {
    return (
        <div className="movie">
           <img src={IMG_API + poster_path} alt={title} />
           <div className="movie_info">
               <h3>{title}</h3>
               <span className="movie_rate">{vote_average}</span>
           </div>
           <div className="movie_overview">
           <p>{overview}</p>
           </div>
        </div>
    )
}

export default Movie
