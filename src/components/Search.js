import React from "react";
import "../styles/components/search.scss";

export default function Search({ input, search, setInput }) {
  return (
    <div className="search">
      <input
        value={input}
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={search}>Search</button>
    </div>
  );
}
