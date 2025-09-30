import "../styles/BackgroundVideo.css";
import videoSrc from "../assets/videos/bg.mp4";

const BackgroundVideo = () => {
  return (
    <video autoPlay loop muted playsInline src={videoSrc} className="bg-vid" />
  );
};

export default BackgroundVideo;
