import React from "react";
import Header from "../Components/Header/Header";
import CategorySection from "../Components/CategorySection/CategorySection";
import TrendySection from "../Components/TrendySection/TrendySection";

const Home = () => {
  return (
    <div>
      <Header
        className="home"
        caption="No Matter Where You're Going To, We'll Take You There"
      />
      <CategorySection />
      <TrendySection />
    </div>
  );
};

export default Home;
