import React from "react";
import "../styles/SearchBar.css";
import { ReactComponent as SearchLogo } from "../logos/icon-search.svg";
import { useSearchedMovies } from "./context/SearchedMoviesContext";

const SearchBar = ({ searchedMovie, query, setQuery }) => {
  const numberOfSearchedMovies = useSearchedMovies();
  return (
    <div className='searchbar-container'>
      <form onSubmit={(event) => event.preventDefault()}>
        <SearchLogo />
        <input
          className='heading-m searchbar-input'
          type='text'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder='Search for movies or TV series'
        />
      </form>
      {searchedMovie && numberOfSearchedMovies ? (
        <div className='search-results-container'>
          Found {numberOfSearchedMovies} results for "{searchedMovie}"
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
