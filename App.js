import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from './pages/LoginScreen'; // Import LoginScreen
import TaskScreen from './pages/TaskScreen'; // Import TaskScreen
import CalendarScreen from './pages/CalendarScreen'; // Import CalendarScreen
import ProfileScreen from './pages/ProfileScreen'; // Import ProfileScreen
import GoalsScreen from './pages/GoalsScreen';
import RegisterScreen from "./pages/RegisterScreen"; // Import GoalsScreen

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const handleLogin = (result) => {
        setLoggedIn(result)
    };
    return (
        <NavigationContainer>
            {loggedIn ? (
                <Drawer.Navigator initialRouteName="TaskScreen">
                    <Drawer.Screen name="Tasks" component={TaskScreen}/>
                    <Drawer.Screen name="Calendar" component={CalendarScreen}/>
                    <Drawer.Screen name="Profile" component={ProfileScreen}/>
                    <Drawer.Screen name="Goals" component={GoalsScreen}/>
                </Drawer.Navigator>
            ) : (
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login">
                        {() => <LoginScreen onLogin={handleLogin} />}
                    </Stack.Screen>
                    <Stack.Screen name="Register">
                        {() => <RegisterScreen onLogin={handleLogin} />}
                    </Stack.Screen>
                </Stack.Navigator>

            )}
        </NavigationContainer>
    );

}

export default App;