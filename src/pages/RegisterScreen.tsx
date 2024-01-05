import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {MyButton} from '../Components/ui/Button';
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {DrawerParamList, RootStackParamList} from "../App";
import {StackNavigationProp} from "@react-navigation/stack/lib/typescript/src/types";

type RegisterScreenProps = DrawerNavigationProp<DrawerParamList>
type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList>

interface RegisterProps {

    goBack?: () => void;
    navigate?: (screen: string) => void;
}

const RegisterScreen: React.FC<RegisterProps> = () => {
    const navigation = useNavigation<RegisterScreenProps & RegisterScreenNavigationProp>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        if (email === 'admin' && password === 'admin') {
            alert('Register successful');
            navigation && navigation.navigate("Login")
        } else {
            alert('Wrong credentials. Please try again');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rejestracja</Text>
            <Input
                placeholder="Adres email"
                leftIcon={<Icon name="email" size={24} color="black"/>}
                onChangeText={(text) => setEmail(text)}
            />
            <Input
                placeholder="Hasło"
                secureTextEntry
                leftIcon={<Icon name="lock" size={24} color="black"/>}
                onChangeText={(text) => setPassword(text)}
            />

            <MyButton title="Zarejestruj się" onPress={() => handleRegister()}/>
            <MyButton title="Wróć" onPress={() => navigation.goBack()}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    signupText: {
        textAlign: 'center',
        marginTop: 16,
    },
});

export default RegisterScreen;
