import CardCetegory from "../CardCetegory/CardCetegory";
import service1 from "../CardCetegory/image/service-1.png";
import service2 from "../CardCetegory/image/service-2.png";
import service3 from "../CardCetegory/image/service-3.png";
import service4 from "../CardCetegory/image/service-4.png";
import "../CategorySection/CategorySection.css";

const List1 = () => {
  let cards = [
    {
      title: "Guided Tours",
      img: service1,
      description:
        "sunt qui repellat saepe quo velit aperiam id aliquam placeat",
    },
    {
      title: "Best Flights Options",
      img: service2,
      description:
        "sunt qui repellat saepe quo velit aperiam id aliquam placeat",
    },
    {
      title: "Religious Tours",
      img: service3,
      description:
        "sunt qui repellat saepe quo velit aperiam id aliquam placeat",
    },
    {
      title: "Medical insurance",
      img: service4,
      description:
        "sunt qui repellat saepe quo velit aperiam id aliquam placeat",
    },
  ];

  return (
    <div className="cards">
      {cards.map((element) => {
        return (
          <CardCetegory
            title={element.title}
            img={element.img}
            description={element.description}
          />
        );
      })}
    </div>
  );
};

export default List1;
