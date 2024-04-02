import "./VideoSection.css";
import video from "../../assets/video-play.svg";

const VideoSection = () => {
  return (
    <div className="video">
      <h1>Wanderlust</h1>
      <img src={video} alt="" className="img-video" />
    </div>
  );
};

export default VideoSection;
