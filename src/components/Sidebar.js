import React from "react";
import "../styles/Sidebar.css";
import { ReactComponent as HomeLogo } from "../logos/icon-nav-home.svg";
import { ReactComponent as MoviesLogo } from "../logos/icon-nav-movies.svg";
import { ReactComponent as TvSeriesLogo } from "../logos/icon-nav-tv-series.svg";
import { ReactComponent as BookmarksLogo } from "../logos/icon-nav-bookmark.svg";
import { ReactComponent as Logo } from "../logos/logo.svg";
import { Link } from "react-router-dom";

const Sidebar = ({ resetState }) => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-logo-container'>
        <Link to='/' onClick={resetState}>
          <Logo />
        </Link>
      </div>
      <div className='sidebar--nav-container'>
        <div className='sidebar-icons'>
          <Link to='/' onClick={resetState}>
            <HomeLogo />
          </Link>
        </div>
        <div className='sidebar-icons'>
          <Link to='/movies' onClick={resetState}>
            <MoviesLogo />
          </Link>
        </div>
        <div className='sidebar-icons'>
          <Link to='/tvseries' onClick={resetState}>
            <TvSeriesLogo />
          </Link>
        </div>
        <div className='sidebar-icons'>
          <Link to='/bookmarks' onClick={resetState}>
            <BookmarksLogo />
          </Link>
        </div>
      </div>
      <div className='sidebar-user-image'>
        <img src='/assets/image-avatar.png' alt='user avatar' />
      </div>
    </div>
  );
};

export default Sidebar;
