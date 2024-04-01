import "./CardTrendy.css";

import calender from "./image/calender.png";
import user from "./image/user-avatar.png";
import Stars from "../Stars/Stars";
const CardTrendy = ({ img, flag, numDay, numPepole, title, description }) => {
  return (
    <div className="card-trendy">
      <div className="section-images">
        <img src={img} alt="" className="img-card" />
        <img className="flag" src={flag} alt="" />
      </div>

      <div className="body-card">
        <div className="section-1">
          <div className="calender">
            <img src={calender} alt="" />
            <p>{numDay}</p>
          </div>
          <div className="num-people">
            <img src={user} alt="" />
            <p>{numPepole}</p>
          </div>
        </div>

        <div className="section-2">
          <h3>{title}</h3>
          <Stars />
        </div>
        <p>{description}</p>
      </div>

      <button className="btn-card">Explore Now</button>
    </div>
  );
};

export default CardTrendy;
