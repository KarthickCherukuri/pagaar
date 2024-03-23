import { SafeAreaView } from "react-native";
import Home from "./components/Home";
import Tabbar from "./components/Tabbar";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Home />
      <Tabbar />
    </SafeAreaView>
  );
}
