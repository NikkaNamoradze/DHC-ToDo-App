import Svg, { Path } from "react-native-svg";

const EditIcon = () => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.167 16.667h11.666a.833.833 0 010 1.666H4.167a.833.833 0 110-1.666zM3.333 12.5l8.334-8.333 2.5 2.5L5.833 15h-2.5v-2.5zM12.5 3.333l1.667-1.666 2.5 2.5-1.668 1.667-2.499-2.5z"
        fill="#372F2F"
      />
    </Svg>
  );
};

export default EditIcon;
