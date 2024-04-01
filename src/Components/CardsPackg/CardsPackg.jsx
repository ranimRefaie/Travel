import { FaStar } from "react-icons/fa";
import "./CardsPackg.css";
import { useEffect, useState } from "react";
import DataPackages from "../Lists/DataPackage";
const CardsPackg = () => {
  const [cardItem, setCardItem] = useState([]);
  useEffect(() => {
    setCardItem(DataPackages());
  });
  return (
    <div className="cards">
      {cardItem.map((item) => (
        <div className="card" key={item.id}>
          <div className="image">
            <img src={item.img} alt="" />
            <div className="footer-img">
              <p>{item.date}</p>
              <p>{item.numPeople}</p>
            </div>
          </div>
          <div className="body">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="price">
              <p className="desc">{item.price}</p>
              <div className="star">
                <FaStar className="icon" />
                <p>{item.evaluat}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsPackg;
