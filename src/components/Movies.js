import React from "react";
import RenderMoviesAndTv from "./RenderMoviesAndTv";
import SearchBar from "./SearchBar";

const Movies = ({ hoveredMovie, setHoveredMovie, bookmarks, setBookmark }) => {
  return (
    <div className='category-wrapper'>
      <SearchBar />
      <div>
        <h2 className='heading-l'>Movies</h2>
        <div className='movie-tv-container'>
          <RenderMoviesAndTv
            hoveredMovie={hoveredMovie}
            setHoveredMovie={setHoveredMovie}
            bookmarks={bookmarks}
            setBookmark={setBookmark}
            category={"Movie"}
          />
        </div>
      </div>
    </div>
  );
};

export default Movies;
