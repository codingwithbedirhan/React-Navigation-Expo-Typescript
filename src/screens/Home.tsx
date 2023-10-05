import { useNavigation } from "@react-navigation/native";
import { Button, Text, TouchableOpacity, View } from "react-native"
import { HomeStackParamList, StackScreens } from "../navigation/types";
import { FlatList } from "react-native-gesture-handler";

const Home = () => {
    const navigation = useNavigation<HomeStackParamList>()
    return (
        <View>
            <Text>Home</Text>
            <Button
                title="Home details sayfasına git"
                onPress={() => navigation.navigate(StackScreens.HomeDetail, {
                    item: 10
                })}
            />
        </View>
    )
}

export default Home;