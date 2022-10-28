import React from "react";
import SearchBar from "./SearchBar";
import RenderMoviesAndTv from "./RenderMoviesAndTv";

const TvSeries = ({ hoveredMovie, setHoveredMovie }) => {
  return (
    <div className='category-wrapper'>
      <SearchBar />
      <div className=''>
        <h2 className='heading-l'>TvSeries</h2>
        <div className='movie-tv-container'>
          <RenderMoviesAndTv
            hoveredMovie={hoveredMovie}
            setHoveredMovie={setHoveredMovie}
            category={"TV Series"}
          />
        </div>
      </div>
    </div>
  );
};

export default TvSeries;
