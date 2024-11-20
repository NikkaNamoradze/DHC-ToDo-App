import Svg, { Path } from "react-native-svg";

const CloseIcon = () => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M5.333 15.833l-1.166-1.166L8.833 10 4.167 5.333l1.166-1.166L10 8.833l4.667-4.666 1.166 1.166L11.167 10l4.666 4.667-1.166 1.166L10 11.167l-4.667 4.666z"
        fill="#30507D"
      />
    </Svg>
  );
};

export default CloseIcon;
