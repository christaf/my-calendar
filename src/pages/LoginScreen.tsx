import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {MyButton} from "../Components/ui/Button";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {DrawerParamList} from "../App";

type LoginScreenProps = DrawerNavigationProp<DrawerParamList>

interface LoginProps {
    onLogin: (result: boolean) => void;
}

const LoginScreen : React.FC<LoginProps> = ({onLogin}) => {

    const navigation = useNavigation<LoginScreenProps>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if (email === 'admin' && password === 'admin') {
            console.log('Login successful ls')
            onLogin(true)
        } else {
            console.log('Login failed ls')
            alert('Wrong credentials. Please try again')
            onLogin(false)
        }
    };
    const handleRegister = () => {
        navigation.navigate('Register' as never)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Logowanie</Text>
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
            <MyButton title="Zaloguj się" onPress={() => handleLogin()}/>

            <Pressable onPress={() => handleRegister()}>
                <Text style={styles.signupText}>Nie masz konta? Zarejestruj się</Text>
            </Pressable>
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
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    signupText: {
        textAlign: 'center',
        marginTop: 16,
    },
});

export default LoginScreen;
