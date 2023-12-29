import {MyButton} from "../Components/ui/Button";
import {View, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";

const StatisticsScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Statystyki</Text>
            <MyButton title="Wróć" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default StatisticsScreen;