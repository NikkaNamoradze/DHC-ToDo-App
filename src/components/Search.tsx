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
        style={styles.input}
        placeholder="Search for notes"
        onChangeText={handleChangeText}
      />
      <View style={styles.iconContainer}>
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
  input: {
    width: "80%",
  },
  iconContainer: {
    backgroundColor: "#6A6CE0",
    padding: 6,
    borderRadius: 6,
  },
});

export default Search;
