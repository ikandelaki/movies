import React from "react";
import data from "../data/data.json";
import RenderBookmarkLogo from "./RenderBookmarkLogo";
import RenderMovieDescription from "./RenderMovieDescription";
import RenderPlayButton from "./RenderPlayButton";

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

  // If the user searched for the term but no movies were found return error message.
  if (searchedMovie && !moviesData.length)
    return <div className='heading-m'>Sorry, no movies were found...</div>;

  // Render movies and tv series, depending on what was requested
  return moviesData.map((movie, i) => {
    if ((movie.isTrending || i > 24) && !searchedMovie) return;
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
  });
};

export default RenderMoviesAndTv;
