import Title from "../Title/Title";
import "./TrendSection.css";
import tourplans from "../../assets/TourPlans-img.png";

const TrendSection = () => {
  return (
    <div className="trend-section container">
      <div className="col-1">
        <img src={tourplans} alt="" />
      </div>
      <div className="col-2">
        <Title title1="TREND" title2="Our Popular Tour Plans" />
        <p className="desc">
          Et labore harum non nobis ipsum eum molestias mollitia et corporis
          praesentium a laudantium. Et labore harum non nobis ipsum eum
          molestias mollitia et corporis praesentium a laudantium.
        </p>
        <div className="percent">
          <div className="col-1">
            <span>78%</span>
            <p>VACATIONS</p>
          </div>
          <div className="col-2">
            <span>55%</span>
            <p>HONEYMOON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendSection;
