import React, { useEffect } from "react";
import data from "../data/data.json";
import RenderBookmarkLogo from "./RenderBookmarkLogo";
import RenderMovieDescription from "./RenderMovieDescription";
import RenderPlayButton from "./RenderPlayButton";
import { useSearchedMoviesUpdate } from "./context/SearchedMoviesContext";
import { useSearchedMovies } from "./context/SearchedMoviesContext";

const RenderMoviesAndTv = ({
  hoveredMovie,
  setHoveredMovie,
  category,
  bookmarks,
  setBookmark,
  searchedMovie,
}) => {
  // If we have the searched movie, filter the data array to render searched movies.
  const moviesData = searchedMovie
    ? data.filter((movie) => movie.title.toLowerCase().includes(searchedMovie))
    : data;

  // if we have the searched movie, store in state the number of search results.
  const updateSearchedMoviesNumber = useSearchedMoviesUpdate();
  const searchedMoviesNumber = useSearchedMovies();

  // Calculate how many search results belong to current category
  useEffect(() => {
    if (category && searchedMovie) {
      const numberOfSearchedMoviesInCategory = moviesData.reduce(
        (acc, movie) => (movie.category === category ? acc + 1 : acc),
        0
      );
      updateSearchedMoviesNumber(numberOfSearchedMoviesInCategory);
    } else {
      updateSearchedMoviesNumber(moviesData.length);
    }

    if (searchedMovie && category === "Bookmarks") {
      updateSearchedMoviesNumber(moviesData.length);
    }
  }, [searchedMovie, category, moviesData, updateSearchedMoviesNumber]);

  // If the user searched for the term but no movies were found return error message.
  if (searchedMovie && !searchedMoviesNumber)
    return (
      <div className='heading-m error'>Sorry, no movies were found...</div>
    );

  // Render movies and tv series, depending on what was requested
  return moviesData.map((movie, i) => {
    if ((movie.isTrending || i > 24) && !searchedMovie) return null;
    if (category && movie.category === category) {
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
    } else if (!category) {
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
    }
    return null;
  });
};

export default RenderMoviesAndTv;
