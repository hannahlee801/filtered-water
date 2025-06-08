import "./Header.css";
import GradientText from "./GradientText.tsx";

const Header = () => {
  return (
    <div className="fullHeader">
      <GradientText
        colors={["#93e9ff", "#4079ff", "#93e9ff", "#4079ff", "#93e9ff"]}
        animationSpeed={5}
        showBorder={false}
        className="custom-class"
      >
        Filter That Water!
      </GradientText>
    </div>
  );
};

export default Header;
