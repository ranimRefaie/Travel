import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = ({ className, caption }) => {
  return (
    <div id="header" className={className}>
      <NavBar />
      <Hero caption={caption} />
    </div>
  );
};

export default Header;
