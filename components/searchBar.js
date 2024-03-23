import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MagnifyingGlass from "react-native-vector-icons/SimpleLineIcons";
import Filter from "react-native-vector-icons/AntDesign";

const screenWidth = Dimensions.get("window").width;
//magnifier filter
const Searchbar = () => {
  const [query, setQuery] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.inputContainer}>
          <MagnifyingGlass name="magnifier" size={24} color="black" />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search Jobs,Company"
            placeholderTextColor="black"
            style={{
              fontSize: 17,
              width: 240,
              overflow: "hidden",
            }}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter name="filter" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "space-between",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingVertical: 16,
    // paddingRight: 76,
  },
  filterButton: {
    justifyContent: "center",
    padding: 16,
    backgroundColor: "rgb(255,214,166)",
    borderLeftColor: "black",
    borderLeftWidth: 2,
  },
  backgroundImage: {
    position: "absolute",
    // top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default Searchbar;
