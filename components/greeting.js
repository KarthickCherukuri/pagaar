import { View, Text, Image, StyleSheet } from "react-native";

const Greeting = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Hello</Text>
        <Text
          style={{
            color: "#232C5D",
            fontWeight: "bold",
            fontSize: 24.62,
            fontFamily: "urbanist",
          }}>
          Pratik.👋
        </Text>
      </View>
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 63, height: 63 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "400",
  },
});

export default Greeting;
