import React from "react";
import SearchBar from "./SearchBar";

const Bookmarks = () => {
  return (
    <div className='category-wrapper'>
      <SearchBar />
      <div>
        <h2 className='heading-l'>Bookmarks</h2>
      </div>
    </div>
  );
};

export default Bookmarks;
