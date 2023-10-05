import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/Profil";
import { StackScreens } from "./types";

const Stack = createStackNavigator()

const ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={StackScreens.Profile} component={Profile} />
        </Stack.Navigator>
    )
}

export default ProfileStack;