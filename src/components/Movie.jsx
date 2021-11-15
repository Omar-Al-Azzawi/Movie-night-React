import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`;
const IMG_API = "https://image.tmdb.org/t/p/w1280";

function Movie({ title, poster_path, vote_average, overview }) {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  return (
    <div>
      {movies &&
        movies
          .filter((movie) => movie.id === id)
          .map((movie) => (
            <div key={movie.id} className="user_container">
              <img src={IMG_API + poster_path} alt={title} />
              <h3>{movie.title}</h3>
            </div>
          ))}
    </div>
  );
}

export default Movie;
