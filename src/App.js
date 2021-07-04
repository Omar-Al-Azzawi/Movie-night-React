import { useState, useEffect } from "react";
import './App.css';
import Movie from "./components/Movie"

const API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5160ae527d1c323f1979fb60a2c3cacb';
const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=5160ae527d1c323f1979fb60a2c3cacb';

function App() {
const[movies, setMovies] = useState([]);



useEffect(() =>{
  fetch(API)
  .then(res => res.json())
  .then(data => {
    setMovies(data.results);
    console.log(data);
  });
},[]);

  return (
    <div className="container">
      {movies.map((movie) =>(
        <Movie key={movie.id} {...movie}/>
      ))}
    </div>
  );
}

export default App;
