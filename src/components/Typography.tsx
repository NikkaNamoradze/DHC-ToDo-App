import { useFonts } from "expo-font";
import React from "react";
import { ActivityIndicator, Text, TextStyle } from "react-native";

interface TypographyProps {
  children: React.ReactNode;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  color?: string;
  style?: TextStyle;
  size?: number;
}

const Typography = ({
  children,
  fontWeight = 400,
  color = "#000",
  style,
  size,
}: TypographyProps) => {
  const [fontsLoaded] = useFonts({
    "Poppins-Thin": require("../../assets/fonts/PoppinsThin.ttf"),
    "Poppins-Light": require("../../assets/fonts/PoppinsLight.ttf"),
    "Poppins-LightItalic": require("../../assets/fonts/PoppinsLightItalic.ttf"),
    "Poppins-Regular": require("../../assets/fonts/PoppinsRegular.ttf"),
    "Poppins-Medium": require("../../assets/fonts/PoppinsMedium.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/PoppinsSemiBold.ttf"),
    "Poppins-Bold": require("../../assets/fonts/PoppinsBold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/PoppinsExtraBold.ttf"),
    "Poppins-Black": require("../../assets/fonts/PoppinsBlack.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const fontFamily = {
    100: "Poppins-Thin",
    200: "Poppins-Light",
    300: "Poppins-LightItalic",
    400: "Poppins-Regular",
    500: "Poppins-Medium",
    600: "Poppins-SemiBold",
    700: "Poppins-Bold",
    800: "Poppins-ExtraBold",
    900: "Poppins-Black",
  };

  return (
    <Text
      style={[
        { fontFamily: fontFamily[fontWeight], color, fontSize: size },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default Typography;
