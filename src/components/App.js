import React, { useState } from "react";
import "../styles/App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./Movies";
import TvSeries from "./TvSeries";
import Bookmarks from "./Bookmarks";
import Sidebar from "./Sidebar";

const App = () => {
  const [hoveredMovie, setHoveredMovie] = useState("");

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
              />
            }
          >
            <Route
              path='home'
              element={
                <Home
                  hoveredMovie={hoveredMovie}
                  setHoveredMovie={setHoveredMovie}
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
              />
            }
          />
          <Route
            path='/tvseries'
            element={
              <TvSeries
                hoveredMovie={hoveredMovie}
                setHoveredMovie={setHoveredMovie}
              />
            }
          />
          <Route
            path='/bookmarks'
            element={
              <Bookmarks
                hoveredMovie={hoveredMovie}
                setHoveredMovie={setHoveredMovie}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
