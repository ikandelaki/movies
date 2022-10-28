import React from "react";

const RenderMovieDescription = ({ movie }) => {
  return (
    <div className='home-trending--movie_content__description'>
      {/* Render movie description */}
      <div className='body-m'>
        <span>{movie.year}</span>
        <span></span>
        <span>
          <img
            src={
              movie.category === "Movie"
                ? "/assets/icon-category-movie.svg"
                : "/assets/icon-category-tv.svg"
            }
            alt={movie.category + "logo"}
          />
          <p>{movie.category}</p>
        </span>
        <span></span>
        <span>{movie.rating}</span>
      </div>
      <div>
        <h3 className='heading-s'>{movie.title}</h3>
      </div>
    </div>
  );
};

export default RenderMovieDescription;
