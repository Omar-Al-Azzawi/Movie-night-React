import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function WatchList() {
  const list = useSelector((state) => state.watch);

  return (
    <div>
      {list.watchList.length === 0 ? (
        <h2
          style={{
            color: "#f64c72",
            textAlign: "center",
            marginTop: "80px",
            letterSpacing: "2px",
          }}
        >
          You have no movies in your watchlist
        </h2>
      ) : (
        <ul>
          {list.watchList.map((item) => (
            <li key={item.id} style={{ color: "#fff" }}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
      <Link to="/">
        <button className="back-btn">Back to Home</button>
      </Link>
    </div>
  );
}

export default WatchList;
