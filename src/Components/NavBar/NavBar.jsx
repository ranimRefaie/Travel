import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import MobileNav from "../MobileNav/MobileNav";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const [activeLink, setActiveLink] = useState("Home");
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  return (
    <div className="navbar">
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <div className="nav-wrapper">
        <div className="nav-content">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
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
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? (
                <IoClose className="btn-close" />
              ) : (
                <FiAlignJustify />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
