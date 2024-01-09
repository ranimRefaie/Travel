import "./CardCetegory.css";

const CardCetegory = ({ img, title, description }) => {
  return (
    <div className="card-catg">
      <div className="img-card">
        <img src={img} alt="" />
      </div>
      <div className="title-card-cg">
        <h2>{title}</h2>
      </div>
      <div className="desc-card-cg">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardCetegory;
