import { ScrollView } from "react-native";
import Greeting from "./greeting";
import Searchbar from "./searchBar";
import Suggestions from "./suggestions";
import MostRecents from "./mostRecents";
import TopRoles from "./topRoles";

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Greeting />
      <Searchbar />
      <Suggestions />
      <MostRecents />
      <TopRoles />
    </ScrollView>
  );
};

export default Home;
