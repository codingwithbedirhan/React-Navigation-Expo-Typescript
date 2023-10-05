import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import { TabScreens } from "./types";

const Tab = createBottomTabNavigator();

const TabStack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={TabScreens.Home} component={HomeStack} />
            <Tab.Screen name={TabScreens.Profile} component={ProfileStack} />
        </Tab.Navigator>
    )
}

export default TabStack;