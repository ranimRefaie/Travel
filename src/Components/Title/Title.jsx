import "./Title.css";

const Title = ({ title1, title2 }) => {
  return (
    <div className="title">
      <h5>{title1}</h5>
      <h1>{title2}</h1>
    </div>
  );
};

export default Title;
