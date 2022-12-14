import React from "react";
import SearchBar from "./SearchBar";
import RenderMoviesAndTv from "./RenderMoviesAndTv";

const TvSeries = ({
  hoveredMovie,
  setHoveredMovie,
  bookmarks,
  setBookmark,
  setQuery,
  searchedMovie,
  query,
}) => {
  return (
    <div className='category-wrapper'>
      <SearchBar
        searchedMovie={searchedMovie}
        query={query}
        setQuery={setQuery}
      />
      <div className=''>
        {!searchedMovie ? <h2 className='heading-l'>TvSeries</h2> : null}
        <div className='movie-tv-container'>
          <RenderMoviesAndTv
            hoveredMovie={hoveredMovie}
            setHoveredMovie={setHoveredMovie}
            bookmarks={bookmarks}
            setBookmark={setBookmark}
            category={"TV Series"}
            searchedMovie={searchedMovie}
          />
        </div>
      </div>
    </div>
  );
};

export default TvSeries;
