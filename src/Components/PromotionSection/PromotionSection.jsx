import Title from "../Title/Title";
import "./PromotionSection.css";
import promotion from "../../assets/promotion_img.png";

const PromotionSection = () => {
  return (
    <div className="prom-section container">
      <div className="col-1">
        <Title
          title1="PROMOTION"
          title2="We Provide You Best Europe Sightseeing Tours"
        />
        <p>
          Et labore harum non nobis ipsum eum molestias mollitia et corporis
          praesentium a laudantium internos. Non quis eius quo eligendi corrupti
          et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus
          illum aut optio quibusdam!
        </p>
        <button>View Packages</button>
      </div>
      <div className="col-2">
        <img src={promotion} alt="" />
      </div>
    </div>
  );
};

export default PromotionSection;
