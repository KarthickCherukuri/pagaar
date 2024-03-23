import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import Home from "react-native-vector-icons/Entypo";
import User from "react-native-vector-icons/FontAwesome";
import Clock from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";

const tabs = [
  {
    name: "Home",
    Icon: Home,
    iconName: "home",
  },
  {
    name: "Alerts",
    iconName: "alarm-on",
    Icon: Clock,
  },
  {
    name: "Profile",
    Icon: User,
    iconName: "user",
  },
];
const TabItems = ({ Icon, name, iconName, selectedTab, setSelectedTab }) => {
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
          <Icon
            name={iconName}
            size={24}
            color={selectedTab !== iconName ? "rgb(199,196,253)" : "black"}
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
    marginTop: 80,
    marginRight: 80,
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgb(199,196,253)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  selectedTab: {
    borderWidth: 4,
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
    paddingLeft: 32,
    paddingRight: 32,
    display: "flex",
    flexDirection: "row",

    zIndex: 1,
    bottom: 0,
    position: "absolute",
    paddingBottom: 50,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    alignSelf: "center",
    height: 100,
    bottom: 0,
  },
});

export default Tabbar;
