import React, { useState } from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import TvSeries from "./TvSeries";
import Bookmarks from "./Bookmarks";
import Sidebar from "./Sidebar";

const App = () => {
  const [hoveredMovie, setHoveredMovie] = useState("");
  const [bookmarks, setBookmark] = useState([]);

  return (
    <Router>
      <div className='app-container'>
        <Sidebar />
        <Routes>
          <Route
            path='/'
            element={
              <Home
                hoveredMovie={hoveredMovie}
                setHoveredMovie={setHoveredMovie}
                bookmarks={bookmarks}
                setBookmark={setBookmark}
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
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
