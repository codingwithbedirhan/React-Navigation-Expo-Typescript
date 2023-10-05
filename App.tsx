import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native";
import TabStack from "./src/navigation/TabStack";

export default function App() {
  return (
    <NavigationContainer>
      <TabStack />
    </NavigationContainer>
  );
}
