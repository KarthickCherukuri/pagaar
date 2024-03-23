import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

const Card = ({ title, color, number }) => (
  <View style={{ ...styles.card, backgroundColor: color }}>
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 18,
      }}>
      {title}
    </Text>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
      }}>
      <Text style={{ fontWeight: "bold", fontSize: 24 }}>{number}</Text>
      <Text style={{ fontWeight: "600" }}>New Jobs</Text>
    </View>
  </View>
);

const cards = [
  { title: "Front end Engineer", color: "rgb(212,246,237)", number: 16 },
  { title: "Database Engineer", color: "rgb(235,246,212)", number: 16 },
  { title: "Database Engineer", color: "rgb(212,224,246)", number: 23 },
  { title: "Database Engineer", color: "rgb(246,212,243)", number: 46 },
];

const TopRoles = () => {
  return (
    <View style={styles.constainer}>
      <Text style={{ fontWeight: "bold", fontSize: 15 }}>Top Roles</Text>
      <View style={styles.cardsList}>
        {cards.map((each) => (
          <Card {...each} id={each.color} />
        ))}
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log("Touchable was pressed");
        }}
        style={{
          padding: 24,
          borderWidth: 2,
          borderRightWidth: 4,
          borderBottomWidth: 4,
          paddingVertical: 24,
          marginBottom: 80,
          borderRadius: 10,
        }}>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          View all
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  card: {
    padding: 22.5,
    width: 170,
    marginBottom: 3,
    borderRadius: 9,
    borderWidth: 1,
    borderBlockColor: "black",
    borderRightWidth: 4,
    borderBottomWidth: 4,
    gap: 23.6,
  },
  cardsList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingTop: 24,
    paddingBottom: 24,
  },
});
export default TopRoles;
