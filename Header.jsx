import React from "react";
import { Link } from "react-router-dom";
import "./ForAll.css";
const Header = () => {
  return (
    <div>
      <div class="header">
        <div class="slider">
          <div class="container">
            <div class="intro">
              <h2>Tokurov yasin</h2>
              <button>Learn more</button>
            </div>
          </div>
        </div>

        <div class="navbar">
          <div class="container">
            <h2>
              Fo<span>cal</span>
            </h2>
            <ul>
              <Link to="/">
                <li class="active">
                  <a href="#">Home</a>
                </li>
              </Link>
              <Link to="/about">
                <li>
                  <a href="#">About</a>
                </li>
              </Link>
              <Link to="/skills">
                <li>
                  <a href="#">Skills</a>
                </li>
              </Link>
              <Link to="/resume">
                <li>
                  <a href="#">Resume</a>
                </li>
              </Link>

              <Link to="/contact">
                <li>
                  <a href="#">Contact me</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
