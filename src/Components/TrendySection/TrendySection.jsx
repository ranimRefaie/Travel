import CardTrendy from "../CardTrendy/CardTrendy";
import Lists2 from "../Lists/Lists2";
import Title from "../Title/Title";

const TrendySection = () => {
  return (
    <div className="trendy-section">
      <Title title1="TRENDY" title2="Our Trending Tour Packages" />
      <div className="cards">
        <Lists2 />
      </div>
    </div>
  );
};

export default TrendySection;
