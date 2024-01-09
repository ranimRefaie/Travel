import "./Hero.css";
const Hero = ({ caption }) => {
  return (
    <div className="hero">
      <h2>{caption}</h2>
    </div>
  );
};

export default Hero;
