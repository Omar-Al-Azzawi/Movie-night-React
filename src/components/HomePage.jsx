import React, { useState, useEffect } from "react";

import Movies from "./Movies";

import { GiPopcorn } from "react-icons/gi";
import { Link } from "react-router-dom";

const API = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=`;

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    } else {
      searchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <header className="header">
        <div className="logo_container">
          <h1>
            <Link to="/">
              <GiPopcorn />
              Movie Night
            </Link>
          </h1>
        </div>
        <div className="search_container">
          <form className="search_form" onSubmit={handleOnSubmit}>
            <input
              className="header_search"
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleOnChange}
            />
            <span className="search__icon">
              <Link to="/watch">
                <h2>Watch list</h2>
              </Link>
            </span>
          </form>
        </div>
      </header>
      <div className="container">
        {movies && movies.map((movie) => <Movies key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default HomePage;
