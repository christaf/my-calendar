import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from './pages/LoginScreen'; // Import LoginScreen
import TaskScreen from './pages/TaskScreen'; // Import TaskScreen
import CalendarScreen from './pages/CalendarScreen'; // Import CalendarScreen
import ProfileScreen from './pages/ProfileScreen'; // Import ProfileScreen
import HabitScreen from './pages/HabitScreen';
import RegisterScreen from "./pages/RegisterScreen";
import CustomDrawerContent from "./components/ui/CustomDrawerContent";
import {SettingsProvider, useSettings} from "./contexts/SettingsContext";
import SettingsScreen from "./pages/SettingsScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
    // const {darkMode} = useSettings();
    // console.log(darkMode)
    const [loggedIn, setLoggedIn] = useState(false);
    const handleLogin = (result) => {
        setLoggedIn(result)
    };

    const handleLogout = () => {
        setLoggedIn(false)
    }

    return (

        // <SettingsProvider>
            <NavigationContainer>
                {/*<div  style={{backgroundColor: darkMode ? 'black' : 'white'}}></div>*/}
                {loggedIn ? (
                    <Drawer.Navigator initialRouteName="Logged" drawerContent={(props) => (
                        <CustomDrawerContent {...props} onLogout={handleLogout}/>
                    )}>
                        <Drawer.Screen name="Tasks" component={TaskScreen}/>
                        <Drawer.Screen name="Calendar" component={CalendarScreen}/>
                        <Drawer.Screen name="Profile" component={ProfileScreen}/>
                        <Drawer.Screen name="Habits" component={HabitScreen}/>
                        <Drawer.Screen name={'Settings'} component={SettingsScreen}/>
                    </Drawer.Navigator>
                ) : (
                    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                        <Stack.Screen name="Login">
                            {() => <LoginScreen onLogin={handleLogin}/>}
                        </Stack.Screen>
                        <Stack.Screen name="Register">
                            {() => <RegisterScreen/>}
                        </Stack.Screen>
                    </Stack.Navigator>

                )}
            </NavigationContainer>

        // </SettingsProvider>
    );

}

export default App;