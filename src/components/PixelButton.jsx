import "../styles/PixelButton.css";

const PixelButton = ({ onClick, children, ...props }) => {
  return (
    <button className="pixel-button" onClick={onClick} {...props}>
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">{children}</span>
    </button>
  );
};

export default PixelButton;