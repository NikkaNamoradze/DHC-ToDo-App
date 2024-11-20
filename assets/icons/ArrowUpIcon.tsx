import Svg, { Path } from "react-native-svg";

const ArrowUpIcon = () => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M5 12.5l5-5 5 5"
        stroke="#372F2F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowUpIcon;
