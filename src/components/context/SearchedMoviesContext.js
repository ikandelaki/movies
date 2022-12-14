import React, { useContext, useState } from "react";

const SearchedMoviesContext = React.createContext();
const SearchedMoviesUpdateContext = React.createContext();

export function useSearchedMovies() {
  return useContext(SearchedMoviesContext);
}

export function useSearchedMoviesUpdate() {
  return useContext(SearchedMoviesUpdateContext);
}

export function SearchedMoviesProvider({ children }) {
  const [numberOfSearchedMovies, setNumberOfSearchedMovies] = useState(0);

  return (
    <SearchedMoviesContext.Provider value={numberOfSearchedMovies}>
      <SearchedMoviesUpdateContext.Provider value={setNumberOfSearchedMovies}>
        {children}
      </SearchedMoviesUpdateContext.Provider>
    </SearchedMoviesContext.Provider>
  );
}
