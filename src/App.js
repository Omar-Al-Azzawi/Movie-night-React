import { useState, useEffect } from "react";
import './App.css';
import Movie from "./components/Movie"
import { GiPopcorn } from "react-icons/gi";

const API = 'https://api.themoviedb.org/3/trending/movie/day?api_key=5160ae527d1c323f1979fb60a2c3cacb';
const SEARCH_API = 'https://api.themoviedb.org/3/search/multi?api_key=5160ae527d1c323f1979fb60a2c3cacb';

function App() {
const[movies, setMovies] = useState([]);
const[searchTerm, setSearchTerm] = useState('');



useEffect(() =>{
  fetch(API)
  .then(res => res.json())
  .then(data => {
    setMovies(data.results);
  });
},[]);

const handleOnSubmit = (event) =>{
  event.preventDefault();

  fetch(SEARCH_API + searchTerm)
  .then(res => res.json())
  .then(data => {
    setMovies(data.results);
  });
}

const handleOnChange = (e) =>{
  setSearchTerm(e.target.value);
};

  return (
    <>
      <header className="header">
        <h1><GiPopcorn />Movie Night</h1>
        <form onSubmit={handleOnSubmit}>
          <input className="header_search" type="search" placeholder="Search..." value={searchTerm} onChange={handleOnChange}/>
        </form>
      </header>
      <div className="container">
        {movies && movies.map((movie) =>(
          <Movie key={movie.id} {...movie}/>
        ))}
      </div>
    </>
  );
}

export default App;
