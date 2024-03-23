import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Home from "../assets/home.png";
import User from "../assets/profile.png";
import Clock from "../assets/clock.png";
import { useState } from "react";
const screenWidth = Dimensions.get("window").width;
const tabs = [
  {
    name: "Home",
    Icon: require("../assets/home.png"),
    IconNotSelected: require("../assets/home-not.png"),
    iconName: "home",
  },
  {
    name: "Alerts",
    iconName: "alarm-on",
    Icon: require("../assets/clock.png"),
    IconNotSelected: require("../assets/clock-not.png"),
  },
  {
    name: "Profile",
    Icon: require("../assets/profile.png"),
    IconNotSelected: require("../assets/profile-not.png"),
    iconName: "user",
  },
];
const TabItems = ({
  Icon,
  IconNotSelected,
  name,
  iconName,
  selectedTab,
  setSelectedTab,
}) => {
  const style =
    selectedTab === iconName
      ? { ...styles.tabItem, ...styles.selectedTab }
      : { ...styles.tabItem };
  return (
    <TouchableOpacity
      onPress={() => setSelectedTab(iconName)}
      style={{
        ...style,
        bottom: iconName === tabs[1].iconName ? 20 : 0,
      }}>
      <>
        <View>
          <Image
            source={selectedTab === iconName ? Icon : IconNotSelected}
            style={{
              height: selectedTab === iconName ? 36 : 24,
              width: selectedTab === iconName ? 36 : 24,
            }}
          />
        </View>
        {name && selectedTab !== iconName && <Text>{name}</Text>}
      </>
    </TouchableOpacity>
  );
};
const Tabbar = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].iconName);
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/bg-bottom.png")}
        style={styles.backgroundImage}
      />
      <Image
        source={require("../assets/bg-top.png")}
        style={styles.backgroundImage}
      />
      {tabs.map((each) => (
        <TabItems
          {...each}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    height: 80,
    width: 80,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: "rgb(199,196,253)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    left: 16,
  },
  selectedTab: {
    borderWidth: 4,
    height: 98,
    width: 98,
    matgin: 98,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  container: {
    // paddingLeft: 32,
    // paddingRight: 32,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: screenWidth,
    gap: 54,

    zIndex: 1,
    bottom: 0,
    position: "absolute",
    paddingBottom: 40,
  },
  backgroundImage: {
    position: "absolute",
    width: screenWidth,
    alignSelf: "center",
    height: 100,
    bottom: 0,
  },
});

export default Tabbar;
