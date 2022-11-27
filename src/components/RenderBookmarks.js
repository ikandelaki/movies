import React from "react";
import RenderBookmarkLogo from "./RenderBookmarkLogo";
import RenderMovieDescription from "./RenderMovieDescription";
import RenderPlayButton from "./RenderPlayButton";

const RenderBookmarks = ({
  hoveredMovie,
  setHoveredMovie,
  bookmarks,
  setBookmark,
}) => {
  return bookmarks.map((movie) => {
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
