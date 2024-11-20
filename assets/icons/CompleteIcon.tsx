import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const CompleteIcon = () => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <G
        clipPath="url(#clip0_1146_363)"
        stroke="#3DCB65"
        strokeOpacity={0.6}
        strokeWidth={2}
        strokeLinejoin="round"
      >
        <Path d="M10 18.333a8.31 8.31 0 005.893-2.44A8.307 8.307 0 0018.332 10a8.309 8.309 0 00-2.44-5.892A8.307 8.307 0 0010 1.667a8.307 8.307 0 00-5.892 2.44A8.308 8.308 0 001.667 10a8.307 8.307 0 002.44 5.893A8.307 8.307 0 0010 18.333z" />
        <Path d="M6.667 10l2.5 2.5 5-5" strokeLinecap="round" />
      </G>
      <Defs>
        <ClipPath id="clip0_1146_363">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CompleteIcon;
