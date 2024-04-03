import { useState } from "react";
import "./MobileNav.css";
import { Link } from "react-router-dom";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };
  return (
    <div>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-coontainer">
          <div className="top-menu"></div>

          <div style={{ margin: "0 auto" }}>
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
            <div className="button-nav-mobile">
              <button>Get in Touch</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
