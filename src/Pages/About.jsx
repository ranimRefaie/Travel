import Header from "../Components/Header/Header";
import PromotionSection from "../Components/PromotionSection/PromotionSection";
import TrendSection from "../Components/TrendSection/TrendSection";
import VideoSection from "../Components/VideoSection/VideoSection";

const About = () => {
  return (
    <div>
      <Header className="about" caption="About Us" />
      <PromotionSection />
      <VideoSection />
      <TrendSection />
    </div>
  );
};

export default About;
