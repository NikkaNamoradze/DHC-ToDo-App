import { StyleSheet, View } from "react-native";
import PersonIcon from "../../assets/icons/PersonIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import Typography from "./Typography";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <PersonIcon />
        <Typography
          children={"James Ronald"}
          color="#545871"
          size={16}
          fontWeight={700}
        />
      </View>
      <SettingsIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginHorizontal: 20,
  },
});

export default Header;
