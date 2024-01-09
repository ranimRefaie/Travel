import CardExplore from "../CardExplore/CardExplore";
import List1 from "../Lists/List1";
import Title from "../Title/Title";
import "./CategorySection.css";

function CategorySection() {
  return (
    <div>
      <Title title1="CATEGORY" title2="We Offer Best Services" />
      <div className="cards">
        <List1 />
      </div>
      <div className="image-Explore">
        <CardExplore title="Explore Nature" name="card-explore-1" />
        <CardExplore title="Explore Cities" name="card-explore-2" />
      </div>
    </div>
  );
}

export default CategorySection;
