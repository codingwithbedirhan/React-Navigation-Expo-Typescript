import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import HomeDetails from "../screens/HomeDetails";
import { HomeStackParamList, StackScreens } from "./types";

const Stack = createStackNavigator<HomeStackParamList>()

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={StackScreens.Home} component={Home} />
            <Stack.Screen name={StackScreens.HomeDetail} component={HomeDetails} />
        </Stack.Navigator>
    )
}

export default HomeStack;