import React from "react";

const RenderBookmarkLogo = ({ movie, bookmarks, setBookmark }) => {
  const alreadyInBookmarks = bookmarks.find(
    (bookmarkMovie) => JSON.stringify(bookmarkMovie) === JSON.stringify(movie)
  );

  const handleAddToBookmarks = () => {
    if (!alreadyInBookmarks) {
      setBookmark((current) => [...current, movie]);
    } else {
      setBookmark((current) =>
        current.filter(
          (bookmarkMovie) =>
            JSON.stringify(bookmarkMovie) !== JSON.stringify(movie)
        )
      );
    }
  };

  return (
    <div
      className='home-trending--movie_content__bookmark'
      onClick={handleAddToBookmarks}
    >
      {alreadyInBookmarks ? (
        <img src='/assets/icon-bookmark-full.svg' alt='bookmark logo full' />
      ) : (
        <img src='/assets/icon-bookmark-empty.svg' alt='bookmark logo empty' />
      )}
    </div>
  );
};

export default RenderBookmarkLogo;
