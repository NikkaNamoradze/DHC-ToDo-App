import { StyleSheet, TextInput, View } from "react-native";
import SearchIcon from "../../assets/icons/SearchIcon";

interface SearchProps {
  onSearch: (term: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const handleChangeText = (text: string) => {
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: "80%" }}
        placeholder="Search for notes"
        onChangeText={handleChangeText}
      />
      <View style={{ backgroundColor: "#6A6CE0", padding: 6, borderRadius: 6 }}>
        <SearchIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFEFC",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    padding: 9,
    marginHorizontal: 20,
  },
});

export default Search;
