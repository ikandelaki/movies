import React, { useState, useEffect } from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import TvSeries from "./TvSeries";
import Bookmarks from "./Bookmarks";
import Sidebar from "./Sidebar";
import { SearchedMoviesProvider } from "./context/SearchedMoviesContext";

const App = () => {
  const [hoveredMovie, setHoveredMovie] = useState("");
  const [bookmarks, setBookmark] = useState([]);
  const [query, setQuery] = useState("");
  const [searchedMovie, setSearchedMovie] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => setSearchedMovie(query), 1000);
    return () => clearTimeout(timeOutId);
  }, [query]);

  const resetState = () => {
    setSearchedMovie("");
    setQuery("");
  };

  return (
    <Router>
      <div className='app-container no-select'>
        <Sidebar resetState={resetState} />
        <SearchedMoviesProvider>
          <Routes>
            <Route
              path='/'
              element={
                <Home
                  hoveredMovie={hoveredMovie}
                  setHoveredMovie={setHoveredMovie}
                  bookmarks={bookmarks}
                  setBookmark={setBookmark}
                  searchedMovie={searchedMovie}
                  setQuery={setQuery}
                  query={query}
                />
              }
            >
              <Route
                path='home'
                element={
                  <Home
                    hoveredMovie={hoveredMovie}
                    setHoveredMovie={setHoveredMovie}
                    bookmarks={bookmarks}
                    setBookmark={setBookmark}
                    searchedMovie={searchedMovie}
                    setQuery={setQuery}
                    query={query}
                  />
                }
              />
            </Route>
            <Route
              path='/movies'
              element={
                <Movies
                  hoveredMovie={hoveredMovie}
                  setHoveredMovie={setHoveredMovie}
                  bookmarks={bookmarks}
                  setBookmark={setBookmark}
                  searchedMovie={searchedMovie}
                  setQuery={setQuery}
                  query={query}
                />
              }
            />
            <Route
              path='/tvseries'
              element={
                <TvSeries
                  hoveredMovie={hoveredMovie}
                  setHoveredMovie={setHoveredMovie}
                  bookmarks={bookmarks}
                  setBookmark={setBookmark}
                  searchedMovie={searchedMovie}
                  setQuery={setQuery}
                  query={query}
                />
              }
            />
            <Route
              path='/bookmarks'
              element={
                <Bookmarks
                  hoveredMovie={hoveredMovie}
                  setHoveredMovie={setHoveredMovie}
                  bookmarks={bookmarks}
                  setBookmark={setBookmark}
                  searchedMovie={searchedMovie}
                  category={"bookmarks"}
                  setQuery={setQuery}
                  query={query}
                />
              }
            />
          </Routes>
        </SearchedMoviesProvider>
      </div>
    </Router>
  );
};

export default App;
