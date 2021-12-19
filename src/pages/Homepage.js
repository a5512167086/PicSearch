import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import "../styles/pages/homepage.scss";
import Picture from "../components/Picture";

export default function Homepage() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  const apiKey = "563492ad6f9170000100000101f4f6d05ae844d0bdba7762ce52dcd1";
  const initialUrl = "https://api.pexels.com/v1/curated?page=1&per_page=12";
  const searchUrl = `https://api.pexels.com/v1/search?query=${input}&per_page=12&page=${page}`;

  //search data
  const search = async (url) => {
    setPage(2);
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: apiKey,
      },
    });

    let parseData = await dataFetch.json();
    setData(parseData.photos);
    setInput("");
  };

  //load more pictures
  const morePicture = async () => {
    let newUrl;
    if (currentSearch === "") {
      newUrl = `https://api.pexels.com/v1/curated?page=${page}&per_page=12`;
    } else {
      newUrl = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=12&page=${page}`;
    }
    setPage(page + 1);
    const dataFetch = await fetch(newUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: apiKey,
      },
    });

    let parseData = await dataFetch.json();
    setData(data.concat(parseData.photos));
    setInput("");
  };

  //initialize data
  useEffect(() => {
    search(initialUrl);
  }, []);

  useEffect(() => {
    if (currentSearch === "") {
      search(initialUrl);
    } else {
      search(searchUrl);
    }
  }, [currentSearch]);

  return (
    <div>
      <Search
        search={() => {
          setCurrentSearch(input);
        }}
        input={input}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="loadPicture">
        <button onClick={morePicture}>Load More</button>
      </div>
    </div>
  );
}
