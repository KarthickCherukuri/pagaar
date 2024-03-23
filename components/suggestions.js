import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Check from "react-native-vector-icons/AntDesign";
const suggestionsList = ["All", "Design", "Product", "Tech"];

const Bubble = ({ text, selected, setSuggestion }) => {
  const bubbleStyle = selected
    ? { ...styles.bubble, ...styles.selectedBubble }
    : { ...styles.bubble };
  return (
    <TouchableOpacity
      style={bubbleStyle}
      onPress={() => {
        setSuggestion(text);
      }}>
      {selected && (
        <Image
          source={require("../assets/check.png")}
          style={{ height: 9.4, width: 12 }}
        />
      )}
      <Text style={{ fontWeight: 400, fontSize: 16 }}>{text}</Text>
    </TouchableOpacity>
  );
};

const Suggestions = () => {
  const [suggestion, setSuggestion] = useState(suggestionsList[0]);
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {suggestionsList.map((each, index) => (
          <Bubble
            key={index}
            text={each}
            selected={each === suggestion}
            setSuggestion={setSuggestion}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingLeft: 24,
    paddingVertical: 10,
  },
  bubble: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 8,
    borderRadius: 16,
    borderWidth: 1,
    width: 85.5,
    height: 43,
  },
  selectedBubble: {
    backgroundColor: "rgb(189,166,253)",
    borderBottomWidth: 5,
    borderRightWidth: 5,
    borderColor: "black",
  },
});

export default Suggestions;
