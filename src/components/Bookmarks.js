import React from "react";
import SearchBar from "./SearchBar";
import RenderBookmarks from "./RenderBookmarks";

const Bookmarks = ({
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
      <div>
        <h2 className='heading-l'>Bookmarks</h2>
        <div className='movie-tv-container'>
          {bookmarks.length ? (
            <RenderBookmarks
              hoveredMovie={hoveredMovie}
              setHoveredMovie={setHoveredMovie}
              bookmarks={bookmarks}
              setBookmark={setBookmark}
              searchedMovie={searchedMovie}
              category={"bookmarks"}
            />
          ) : (
            <span className='heading-m error'>
              You have no items in bookmarks
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
