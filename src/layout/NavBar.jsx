import React from "react";
function NavBar() {
  return (
    <>
      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li>
            <a href="#about" className="nav-link scrollto">
              <i className="bx bx-user"></i> <span>About</span>
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link scrollto">
              <i className="bx bx-trophy"></i> <span>Skills</span>
            </a>
          </li>
          <li>
            <a href="#resume" className="nav-link scrollto">
              <i className="bx bx-spreadsheet"></i> <span>Background</span>
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link scrollto">
              <i className="bx bxl-codepen"></i> <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link scrollto">
              <i className="bx bx-envelope"></i> <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
