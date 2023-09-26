import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from './pages/LoginScreen'; // Import LoginScreen
import TaskScreen from './pages/TaskScreen'; // Import TaskScreen
import CalendarScreen from './pages/CalendarScreen'; // Import CalendarScreen
import ProfileScreen from './pages/ProfileScreen'; // Import ProfileScreen
import GoalsScreen from './pages/GoalsScreen'; // Import GoalsScreen

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const handleLogin = (result) => {
        setLoggedIn(result)
        if (!result) {
            alert('Wrong credentials. Please try again')
            navigator.navigate('Login')
        }
    };
    return (
        <NavigationContainer>
            {loggedIn ? (
                <Drawer.Navigator initialRouteName="TaskScreen">
                    <Drawer.Screen name="TaskScreen" component={TaskScreen}/>
                    <Drawer.Screen name="CalendarScreen" component={CalendarScreen}/>
                    <Drawer.Screen name="ProfileScreen" component={ProfileScreen}/>
                    <Drawer.Screen name="GoalsScreen" component={GoalsScreen}/>
                </Drawer.Navigator>
            ) : (
                <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Login" component={() => <LoginScreen onLogin={handleLogin}/>}/>
                </Stack.Navigator>

            )}
        </NavigationContainer>
    );

}

export default App;