import React from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { removeFromWatchList } from "../features/watchSlice";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function WatchList() {
  const list = useSelector((state) => state.watch);
  const dispatch = useDispatch();

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
            <li key={item.id} style={{ color: "#fff", listStyle: "none" }}>
              <div>
                <div className="list__container">
                  <div>
                    <img
                      style={{ width: "150px", borderRadius: "10px" }}
                      src={IMG_API + item.poster_path}
                      alt={item.title}
                    />
                  </div>
                  <div className="overview">
                    <p>{item.overview}</p>
                    <button
                      className="remove-btn"
                      onClick={() => dispatch(removeFromWatchList(item))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <h3>{item.title}</h3>
              </div>
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
