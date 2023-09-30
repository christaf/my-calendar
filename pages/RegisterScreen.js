import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Input, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = () => {
        if (email === 'admin' && password === 'admin') {
            navigation.navigate('Login')
            console.log('Register successful ls')
        } else {
            console.log('Register failed ls')
            alert('Wrong credentials. Please try again')
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
            <Button title="Zarejestruj się" onPress={() => handleRegister()}/>

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

export default RegisterScreen;
