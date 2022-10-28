import React from "react";
import "../styles/Sidebar.css";
import { ReactComponent as HomeLogo } from "../logos/icon-nav-home.svg";
import { ReactComponent as MoviesLogo } from "../logos/icon-nav-movies.svg";
import { ReactComponent as TvSeriesLogo } from "../logos/icon-nav-tv-series.svg";
import { ReactComponent as BookmarksLogo } from "../logos/icon-nav-bookmark.svg";
import { ReactComponent as Logo } from "../logos/logo.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-logo-container'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className='sidebar--nav-container'>
        <div className='sidebar-icons'>
          <Link to='/'>
            <HomeLogo />
          </Link>
        </div>
        <div className='sidebar-icons'>
          <Link to='/movies'>
            <MoviesLogo />
          </Link>
        </div>
        <div className='sidebar-icons'>
          <Link to='/tvseries'>
            <TvSeriesLogo />
          </Link>
        </div>
        <div className='sidebar-icons'>
          <Link to='/bookmarks'>
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
