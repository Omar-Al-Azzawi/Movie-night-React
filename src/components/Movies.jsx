import React from "react";
/* import { Link } from "react-router-dom"; */
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setRateColor = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange";
  } else {
    return "red";
  }
};

function Movies({ id, title, poster_path, vote_average, overview }) {
  return (
    <div className="movie">
      {/*       <Link to={`/movie/${id}`}> */}
      <img src={IMG_API + poster_path} alt={title} />
      {/*       </Link> */}
      <div className="movie_info">
        <h3>{title}</h3>
        <span className={`movie_rate ${setRateColor(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className="movie_overview">
        <p>{overview}</p>
        <button className="movie_btn">Add to watch list</button>
      </div>
    </div>
  );
}

export default Movies;
