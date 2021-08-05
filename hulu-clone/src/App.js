import logo from "./logo.svg";

import axios from "axios";
import React, { useState, useEffect } from "react";
import "./requests";
import requests from "./requests";
import Results from "./components/Results";
import Header from "./components/Header";
const API_KEY = "32f21cfa647f7c3b7282a6473a7cfdc4";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieToSearch, setMovieToSearch] = useState("");
  const [search, setSearch] = useState(false);

  const openSearchBar = () => {
    setSearch(!search);
  };

  const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres`;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  const getTrending = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setMovies(res.data.results));
  };

  const getGenre = (id) => {
    axios
      .get(`${baseUrl}${API_KEY}&with_genres=${id}`)
      .then((res) => setMovies(res.data.results));
  };
  const topRated=()=> {
    axios.get(`${baseUrl}${API_KEY}/discover/movie?sort_by=popularity.desc`)
    .then((res)=> setMovies(res.data.results))
  }

  const searcher = (q) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${q}
       `
      )
      .then((res) => setMovies(res.data.results));

    console.log("MOVIES", movies);
  };
  https://api.themoviedb.org/3/search/movie?api_key=32f21cfa647f7c3b7282a6473a7cfdc4&query=john wick

  return (
    <div className="App">
      <Header openSearchBar={openSearchBar} />

      {search && (
        <div className=" flex flex-col items-center pt-0 h-40 ">
          <h1 className="#DC2626">Search</h1>
          <input
            className="rounded-xl bg-gray-50 w-80 m-4 p-1.5 placeholder-gray-600::placeholder"
            name={movieToSearch}
            type="text"
            placeholder="enter a movie"
            value={movieToSearch}
            onChange={(e) => setMovieToSearch(e.target.value)}
          />

          <button
            className="rounded-xl text-gray-50 bg-gray-400 w-60 m-4 p-1.5  hover:bg-gray-50  text-gray-600"
            onClick={(e) => searcher(movieToSearch)}
          >
            Search
          </button>
        </div>
      )}

      <nav>
        <div
          className="flex px-10 sm:px-20 text-2xl whitespace-nowrap
            space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide
            
             
            
            "
        >
          <h4
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white
           active:text-red-500"
            onClick={() => getTrending()}
          >
            Trending
          </h4>
          
          <h4
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white
           active:text-red-500"
            onClick={() => topRated()}
          >
            Top Rated
          </h4>

          {requests.map((r) => {
            return (
              <div className="nav-div">
                <h4
                  className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white
           active:text-red-500"
                  onClick={() => getGenre(r.num)}
                >
                  {r.genre}{" "}
                </h4>
              </div>
            );
          })}
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-{#06202A} h-10 w-1/2" />
      </nav>

      <Results movies={movies} />
    </div>
  );
}

export default App;
