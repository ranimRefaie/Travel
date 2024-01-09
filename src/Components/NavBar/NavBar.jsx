import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "./image/logo.png";
import { useState } from "react";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [collapse, setCollapse] = useState("content-nav");
  const [toggleIcon, setToggleIcon] = useState("toggler-icon");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const onToggle = () => {
    collapse === "content-nav"
      ? setCollapse("content-nav nav-collapse")
      : setCollapse("content-nav");

    toggleIcon === "toggler-icon"
      ? setToggleIcon("toggler-icon toggle")
      : setToggleIcon("toggler-icon");
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className={collapse}>
        <ul>
          <Link
            to="/"
            className={activeLink === "Home" ? "active" : ""}
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={activeLink === "About" ? "active" : ""}
            onClick={() => handleLinkClick("About")}
          >
            About
          </Link>
          <Link
            to="/packages"
            className={activeLink === "Packages" ? "active" : ""}
            onClick={() => handleLinkClick("Packages")}
          >
            Packages
          </Link>
          <Link
            className={activeLink === "Services" ? "active" : ""}
            onClick={() => handleLinkClick("Services")}
          >
            Services
          </Link>
        </ul>
        <div className="button-nav">
          <button>Get in Touch</button>
        </div>
      </div>

      <div className={toggleIcon} onClick={onToggle}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </div>
  );
};

export default NavBar;
