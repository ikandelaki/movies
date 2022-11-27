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
  const moviesData = searchedMovie
    ? data.filter((movie) => movie.title.toLowerCase().includes(searchedMovie))
    : data;
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
