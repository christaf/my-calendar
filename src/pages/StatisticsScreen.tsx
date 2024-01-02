import {MyButton} from "../Components/ui/Button";
import {View, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import React from "react";

const StatisticsScreen: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Statystyki</Text>
            <MyButton title="Wróć" onPress={() => navigation.goBack()}/>
        </View>
    );
}

export default StatisticsScreen;