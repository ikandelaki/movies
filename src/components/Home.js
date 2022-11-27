import React, { useRef, useState } from "react";
import data from "../data/data.json";
import SearchBar from "./SearchBar";
import RenderMoviesAndTv from "./RenderMoviesAndTv";
import RenderMovieDescription from "./RenderMovieDescription";
import "../styles/Home.css";
import RenderPlayButton from "./RenderPlayButton";
import RenderBookmarkLogo from "./RenderBookmarkLogo";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const Home = ({ hoveredMovie, setHoveredMovie, bookmarks, setBookmark }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [lastSlide, setLastSlide] = useState(false);
  const trendingContainerRef = useRef();
  const lastTrendingMovieRef = useRef();

  const renderTrendingMovies = () => {
    const trendingMovies = data.filter((movie) => movie.isTrending);
    return trendingMovies.map((movie, i) => {
      return (
        <div
          className={`home-trending--movie ${
            hoveredMovie === movie.title ? "hover" : ""
          }`}
          key={movie.category + "-" + movie.title}
          onMouseOver={() => setHoveredMovie(movie.title)}
          onMouseOut={() => setHoveredMovie("")}
          ref={i === trendingMovies.length - 1 ? lastTrendingMovieRef : null}
        >
          {/* Render movie image
                IF it is being hovered, add class 'hover' to reduce the brightness of img
            */}
          <div className='home-trending--movie_image'>
            <img src={movie.thumbnail.trending.large} alt={movie.title} />
          </div>

          <div className='home-trending--movie_content'>
            {/* Render bookmark logo */}
            <RenderBookmarkLogo
              bookmarks={bookmarks}
              setBookmark={setBookmark}
              movie={movie}
            />
            {/* Render play button */}
            <RenderPlayButton />
            {/* Render small movie description */}
            <RenderMovieDescription movie={movie} />
          </div>
        </div>
      );
    });
  };

  /* Slide right on right arrow click if it is not the last item */
  const scrollRight = () => {
    if (lastSlide) return;
    if (
      lastTrendingMovieRef.current.getBoundingClientRect().left <
        window.innerWidth &&
      lastTrendingMovieRef.current.getBoundingClientRect().right >
        window.innerWidth
    ) {
      trendingContainerRef.current.style.transform = `translateX(${
        slideNumber * 510 -
        (lastTrendingMovieRef.current.getBoundingClientRect().right -
          window.innerWidth) -
        36
      }px)`;
      setLastSlide(true);
    } else if (!lastSlide) {
      trendingContainerRef.current.style.transform = `translateX(${
        (slideNumber - 1) * 510
      }px)`;
    }

    setSlideNumber(slideNumber - 1);
  };

  /* Slide left on left arrow click if it is not the first item */
  const scrollLeft = () => {
    setLastSlide(false);
    if (slideNumber === 0) return;
    trendingContainerRef.current.style.transform = `translateX(${
      (slideNumber + 1) * 510
    }px)`;

    setSlideNumber(slideNumber + 1);
  };

  return (
    <div className='category-wrapper home-container'>
      <SearchBar />
      <div className='trending-heading-container'>
        <h2 className='heading-l'>Trending</h2>
        <div className='arrows-container'>
          <div
            className={`arrow-left ${!slideNumber ? "disabled" : ""}`}
            onClick={() => scrollLeft()}
          >
            <ArrowLeftIcon />
          </div>
          <div
            className={`arrow-right ${lastSlide ? "disabled" : ""}`}
            onClick={() => scrollRight()}
          >
            <ArrowRightIcon />
          </div>
        </div>
      </div>
      <div className='home-trending--container' ref={trendingContainerRef}>
        {renderTrendingMovies()}
      </div>
      <div className='home-recommended--container'>
        <h2 className='heading-l'>Recommended for you</h2>
        <div className='movie-tv-container'>
          <RenderMoviesAndTv
            hoveredMovie={hoveredMovie}
            setHoveredMovie={setHoveredMovie}
            bookmarks={bookmarks}
            setBookmark={setBookmark}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
