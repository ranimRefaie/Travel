import { useState } from "react";
import "./Stars.css";
import { FaStar } from "react-icons/fa";

const Stars = () => {
  const [rating, setRating] = useState(null);
  const [rateColor, setColor] = useState(null);
  return (
    <div className="stars-rate">
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <div className="stars">
            <label>
              <input
                type="radio"
                name="rate"
                value={currentRate}
                onClick={() => setRating(currentRate)}
              />
              <FaStar
                className="star"
                color={currentRate <= (rateColor || rating) ? "yellow" : "grey"}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Stars;
