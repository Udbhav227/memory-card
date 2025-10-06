import "../styles/BackgroundVideo.css";
import videoSrc from "../assets/videos/bg.mp4";
import posterImage from "../assets/img/fallback-bg.png";

const BackgroundVideo = () => {
  return (
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      src={videoSrc} 
      poster={posterImage}
      className="bg-vid" 
    />
  );
};

export default BackgroundVideo;