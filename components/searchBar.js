import { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MagnifyingGlass from "react-native-vector-icons/SimpleLineIcons";

const screenWidth = Dimensions.get("window").width;

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
              width: 235,
              overflow: "hidden",
            }}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Image
            source={require("../assets/Filter.png")}
            style={{ width: 28, height: 28 }}
          />
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

    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default Searchbar;
