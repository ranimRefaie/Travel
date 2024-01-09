import "./CardExplore.css";
const CardExplore = ({ title, name }) => {
  return (
    <div className={name}>
      <h3>PROMOTION</h3>
      <h1>{title}</h1>
      <button>View Packages</button>
    </div>
  );
};

export default CardExplore;
