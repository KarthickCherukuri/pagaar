import { View, Text, Image, StyleSheet } from "react-native";

const Greeting = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Hello</Text>
        <Text
          style={{
            color: "rgb(35,44,93)",
            fontWeight: "bold",
            ...styles.text,
          }}>
          Pratik.👋
        </Text>
      </View>
      <Image source={require("../assets/logo.png")} />
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
  },
});

export default Greeting;
