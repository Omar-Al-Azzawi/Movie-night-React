import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import Movies from "./Movies";
import Filter from "./Filter";

import { GiPopcorn } from "react-icons/gi";
import { Link } from "react-router-dom";

const API = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_API_KEY}&query=`;

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [active, setActive] = useState(0);

  const watchList = useSelector((state) => state.watch);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setFiltered(data.results);
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
                <h2>
                  Watch list{" "}
                  {watchList.watchList.length > 0 ? (
                    <span
                      className="watch-list-counter"
                      style={{
                        color: "salmon",
                      }}
                    >
                      {watchList.watchList.length}
                    </span>
                  ) : null}
                </h2>
              </Link>
            </span>
            <div>
              <Filter
                movies={movies}
                setFiltered={setFiltered}
                active={active}
                setActive={setActive}
              />
            </div>
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
