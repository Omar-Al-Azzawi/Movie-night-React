import React, { useEffect } from "react";

function Filter({ movies, setActive, active, setFiltered }) {
  useEffect(() => {
    if (active === 0) {
      setFiltered(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.genre_ids.includes(active)
      );
      setFiltered(filtered);
    }
  }, [active]);

  return (
    <div className="filter-container">
      <button onClick={() => setActive(0)}>All</button>
      <button onClick={() => setActive(35)}>Comedy</button>
      <button onClick={() => setActive(28)}>Action</button>
    </div>
  );
}

export default Filter;
