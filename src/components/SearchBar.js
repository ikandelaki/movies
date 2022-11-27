import React from "react";
import "../styles/SearchBar.css";
import { ReactComponent as SearchLogo } from "../logos/icon-search.svg";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className='searchbar-container'>
      <form>
        <SearchLogo />
        <input
          className='heading-m searchbar-input'
          type='text'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder='Search for movies or TV series'
        />
      </form>
    </div>
  );
};

export default SearchBar;
