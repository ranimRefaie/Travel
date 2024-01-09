import n1 from "../CardTrendy/image/n1.png";
import n2 from "../CardTrendy/image/n2.png";
import n3 from "../CardTrendy/image/n3.png";
import flag1 from "../CardTrendy/image/flag-1.png";
import flag2 from "../CardTrendy/image/flag-2.png";
import flag3 from "../CardTrendy/image/flag-3.png";
import CardTrendy from "../CardTrendy/CardTrendy";
import "../CategorySection/CategorySection.css";

const Lists2 = () => {
  let cards = [
    {
      img: n1,
      flag: flag1,
      numDay: "8 days",
      numPepole: "30 People going",
      title: "Switzerland",
      description:
        "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
    },
    {
      img: n2,
      flag: flag2,
      numDay: "8 days",
      numPepole: "60 People going",
      title: "Amazon",
      description:
        "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
    },
    {
      img: n3,
      flag: flag3,
      numDay: "8 days",
      numPepole: "120 People going",
      title: "Giza",
      description:
        "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
    },
  ];
  return (
    <div className="cards">
      {cards.map((element) => {
        return (
          <CardTrendy
            img={element.img}
            flag={element.flag}
            numDay={element.numDay}
            numPepole={element.numPepole}
            title={element.title}
            description={element.description}
          />
        );
      })}
    </div>
  );
};

export default Lists2;
