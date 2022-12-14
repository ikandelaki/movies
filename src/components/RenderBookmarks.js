import React, { useEffect } from "react";
import RenderBookmarkLogo from "./RenderBookmarkLogo";
import RenderMovieDescription from "./RenderMovieDescription";
import RenderPlayButton from "./RenderPlayButton";
import {
  useSearchedMovies,
  useSearchedMoviesUpdate,
} from "./context/SearchedMoviesContext";

const RenderBookmarks = ({
  hoveredMovie,
  setHoveredMovie,
  bookmarks,
  setBookmark,
  searchedMovie,
}) => {
  // If we have the searched movie, filter the data array to render searched movies.
  const moviesData = searchedMovie
    ? bookmarks.filter((movie) =>
        movie.title.toLowerCase().includes(searchedMovie)
      )
    : bookmarks;

  // if we have the searched movie, store in state the number of search results.
  const updateSearchedMoviesNumber = useSearchedMoviesUpdate();
  const searchedMoviesNumber = useSearchedMovies();

  // Calculate how many search results belong to current category
  useEffect(() => {
    if (searchedMovie) {
      updateSearchedMoviesNumber(moviesData.length);
    }
  }, [searchedMovie, moviesData, updateSearchedMoviesNumber]);

  // If the user searched for the term but no movies were found return error message.
  if (searchedMovie && !searchedMoviesNumber)
    return (
      <div className='heading-m error'>Sorry, no movies were found...</div>
    );

  return moviesData.map((movie) => {
    return (
      <div key={movie.title + "-" + movie.year + "-"} className={`movie-tv`}>
        <div
          className={`movie-tv--image_container ${
            hoveredMovie === movie.title ? "hover" : ""
          }`}
          onMouseOver={() => setHoveredMovie(movie.title)}
          onMouseOut={() => setHoveredMovie("")}
        >
          <img
            className='movie-tv--image'
            src={movie.thumbnail.regular.large}
            alt={movie.title}
          />
          <RenderPlayButton />
          <RenderBookmarkLogo
            movie={movie}
            bookmarks={bookmarks}
            setBookmark={setBookmark}
          />
        </div>
        <RenderMovieDescription movie={movie} />
      </div>
    );
  });
};

export default RenderBookmarks;
