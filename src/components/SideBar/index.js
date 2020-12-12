import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <i className="fas fa-fw fa-user-circle fa-2x"></i>
        <div className="sidebar-brand-text mx-3">Nascent</div>
      </a>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Menu</div>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-home"></i>
          <span>Home</span>
        </a>
      </li>

      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          to="/myitems"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-sitemap"></i>
          <span>My Items</span>
        </Link>
      </li>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-video"></i>
          <span>Conference</span>
        </a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Projects</div>

      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fas fa-fw fa-folder"></i>
          <span>Project</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fas fa-fw fa-folder"></i>
          <span>Project</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fas fa-fw fa-folder"></i>
          <span>Project</span>
        </a>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline sidebar-bottom">
        <div className="social-nav">
          <a
            className="bottom-nav-link collapsed"
            href="#"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fab fa-fw fa-instagram"></i>
          </a>
          <a
            className="bottom-nav-link collapsed"
            href="#"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fab fa-fw fa-twitter"></i>
          </a>

          <a
            className="bottom-nav-link collapsed"
            href="#"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fab fa-fw fa-facebook"></i>
          </a>
        </div>
        <p>2020 Nascent Inc, All rights reserved</p>
      </div>
    </ul>
  );
};

export default SideBar;
