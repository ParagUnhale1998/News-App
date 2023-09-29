import React from "react";
import {
  Link
} from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-dark text-white">
      <Link className="navbar-brand text-white" to="/">
        NewsBuddy
      </Link>
      <button className="navbar-toggler bg-light outline-none border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item ">
            <Link
              className="nav-link active text-white"
              aria-current="page"
              to="/" >
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/Service">
              Service
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/business">
              business
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/entertainment">
              entertainment
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/general">
              general
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/health">
              health
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/science">
              science
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/sports">
              sports
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/technology">
              technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
