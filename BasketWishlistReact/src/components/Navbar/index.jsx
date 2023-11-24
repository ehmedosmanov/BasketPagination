import React from "react";
import { CiSun,CiDark } from "react-icons/ci";
import useDarkMode from "../../hooks/useDarkMode";
import "./index.scss";

const Navbar = () => {
  const [dark, setDark] = useDarkMode()

  return (
    <nav id="nav">
      <div className="navbar">
        <div className="container">
         <div className="nav-box">
         <div className="logo">
            <h2>Salam</h2>
          </div>
          <ul className="navbar-items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
          <div className="themes">
            <span onClick={setDark}>
                {dark ? <CiSun/> : <CiDark />}
            </span>
          </div>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
