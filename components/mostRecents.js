import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Location from "react-native-vector-icons/EvilIcons";
import Case from "react-native-vector-icons/MaterialCommunityIcons";
import Clock from "react-native-vector-icons/MaterialIcons";
import Lightning from "react-native-vector-icons/FontAwesome6";
const Card = ({ index }) => {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/adobe.png")}
            style={styles.imgicon}
          />
        </View>
        <Text style={styles.time}>4hr ago</Text>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 17, marginBottom: 8 }}>
        Product Design
      </Text>
      <Text style={{ fontSize: 15, marginBottom: 16, fontWeight: "500" }}>
        Adobe
      </Text>
      <View style={styles.locationContainer}>
        <Image
          source={require("../assets/location.png")}
          style={{ height: 24, width: 24.96 }}
        />
        <Text>Pune, Maharastra, India</Text>
      </View>
      <View style={{ ...styles.locationContainer, marginBottom: 24 }}>
        <Image
          source={require("../assets/work.png")}
          style={{ height: 24, width: 24.96 }}
        />
        <Text>Fresher(0-1)</Text>
      </View>
      {index === 0 ? (
        <TouchableOpacity style={styles.alertButton}>
          <Image
            source={require("../assets/clock.png")}
            style={{ height: 36, width: 36 }}
          />

          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Set alert</Text>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}>
          <View
            style={{
              backgroundColor: "gold",
              width: 14,
              height: 14,
              padding: 2,
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Image
              source={require("../assets/ligntning.png")}
              style={{ width: 24, height: 24 }}
            />
            <Lightning name="bolt-lightning" color="white" size={8} />
          </View>
          <Text style={{ paddingRight: 2 }}>
            Alert has been posted for this profile.
          </Text>
        </View>
      )}
    </View>
  );
};

const MostRecents = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "poppins", fontWeight: "bold", fontSize: 20 }}>
        Most Recent (7)
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.recentList}>
          {Array.from({ length: 7 }, (_, i) => i).map((each) => (
            <Card index={each} key={each} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 24,
  },
  recentList: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    paddingVertical: 24,
  },
  imgicon: {
    height: 30,
    width: 30,
  },
  imageContainer: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#ccc",
    padding: 10,
    width: 50,
  },
  card: {
    padding: 16,
    width: 247,
    height: 305,
    borderRadius: 8,
    borderWidth: 1.5,
    borderRightWidth: 4,
    borderBottomWidth: 4,
  },
  time: {
    color: "rgb(2,194,112)",
    fontSize: 15,
    fontWeight: "bold",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  alertButton: {
    backgroundColor: "rgb(199,196,253)",
    borderRadius: 10,
    paddingVertical: 15,
    direction: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
export default MostRecents;
