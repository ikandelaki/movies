import React from "react";
import data from "../data/data.json";
import SearchBar from "./SearchBar";
import RenderMoviesAndTv from "./RenderMoviesAndTv";
import RenderMovieDescription from "./RenderMovieDescription";
import "../styles/Home.css";
import RenderPlayButton from "./RenderPlayButton";
import RenderBookmarkLogo from "./RenderBookmarkLogo";

const Home = ({ hoveredMovie, setHoveredMovie }) => {
  const renderTrendingMovies = () => {
    return data.map((movie) => {
      if (movie.isTrending) {
        return (
          <div
            className={`home-trending--movie ${
              hoveredMovie === movie.title ? "hover" : ""
            }`}
            key={movie.category + "-" + movie.title}
            onMouseOver={() => setHoveredMovie(movie.title)}
            onMouseOut={() => setHoveredMovie("")}
          >
            {/* Render movie image
                IF it is being hovered, add class 'hover' to reduce the brightness of img
            */}
            <div className='home-trending--movie_image'>
              <img src={movie.thumbnail.trending.large} alt={movie.title} />
            </div>

            <div className='home-trending--movie_content'>
              {/* Render bookmark logo */}
              <RenderBookmarkLogo />
              {/* Render play button */}
              <RenderPlayButton />
              {/* Render small movie description */}
              <RenderMovieDescription movie={movie} />
            </div>
          </div>
        );
      } else {
        return "";
      }
    });
  };

  return (
    <div className='category-wrapper home-container'>
      <SearchBar />
      <div>
        <h2 className='heading-l'>Trending</h2>
      </div>
      <div className='home-trending--container'>{renderTrendingMovies()}</div>
      <div className='home-recommended--container'>
        <h2 className='heading-l'>Recommended for you</h2>
        <div className='movie-tv-container'>
          <RenderMoviesAndTv
            hoveredMovie={hoveredMovie}
            setHoveredMovie={setHoveredMovie}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
