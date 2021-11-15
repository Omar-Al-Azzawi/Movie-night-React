import React from "react";

import { useSelector } from "react-redux";

function WatchList() {
  const list = useSelector((state) => state.watch);

  return (
    <div>
      {list.watchList.length === 0 ? (
        <p>You have no items in your watchlist</p>
      ) : (
        <ul>
          {list.watchList.map((item) => (
            <li key={item.id} style={{ color: "#fff" }}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WatchList;
