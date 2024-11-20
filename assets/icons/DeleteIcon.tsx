import Svg, { Path } from "react-native-svg";

const DeleteIcon = () => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M5.833 3.333A1.667 1.667 0 017.5 1.667h5a1.667 1.667 0 011.667 1.666V5H17.5a.833.833 0 010 1.667h-.89l-.723 10.118a1.666 1.666 0 01-1.663 1.548H5.775a1.667 1.667 0 01-1.662-1.548L3.392 6.667H2.5A.833.833 0 012.5 5h3.333V3.333zM7.5 5h5V3.333h-5V5zM5.062 6.667l.714 10h8.449l.714-10H5.062zm3.271 1.666a.833.833 0 01.834.834v5a.833.833 0 11-1.667 0v-5a.833.833 0 01.833-.834zm3.334 0a.833.833 0 01.833.834v5a.833.833 0 11-1.667 0v-5a.833.833 0 01.834-.834z"
        fill="#F48686"
      />
    </Svg>
  );
};

export default DeleteIcon;
