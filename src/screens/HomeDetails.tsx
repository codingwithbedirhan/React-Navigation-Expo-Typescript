import { Text, View } from "react-native"

const HomeDetails = ({ route }: any) => {
    const props = route.params

    return (
        <View>
            <Text>{props.item}</Text>
        </View>
    )
}

export default HomeDetails;