import React from "react";
import RenderMoviesAndTv from "./RenderMoviesAndTv";
import SearchBar from "./SearchBar";

const Movies = ({
  hoveredMovie,
  setHoveredMovie,
  bookmarks,
  setBookmark,
  searchedMovie,
  setQuery,
  query,
}) => {
  return (
    <div className='category-wrapper'>
      <SearchBar
        searchedMovie={searchedMovie}
        query={query}
        setQuery={setQuery}
      />
      <div>
        {!searchedMovie ? <h2 className='heading-l'>Movies</h2> : null}
        <div className='movie-tv-container'>
          <RenderMoviesAndTv
            hoveredMovie={hoveredMovie}
            setHoveredMovie={setHoveredMovie}
            bookmarks={bookmarks}
            setBookmark={setBookmark}
            category={"Movie"}
            searchedMovie={searchedMovie}
          />
        </div>
      </div>
    </div>
  );
};

export default Movies;
