import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

const SearchIcon = () => {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
      <G clipPath="url(#clip0_1146_198)">
        <Path
          d="M12.833 12.833l-1.166-1.166m-4.959.583a5.542 5.542 0 100-11.083 5.542 5.542 0 000 11.083v0z"
          stroke="#FFFEFC"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1146_198">
          <Path fill="#fff" d="M0 0H14V14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SearchIcon;
