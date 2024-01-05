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
import StatisticsScreen from "./pages/StatisticsScreen";

import CustomDrawerContent from "./Components/ui/CustomDrawerContent";
import {SettingsProvider, useSettings} from "./contexts/SettingsContext";
import {TaskProvider} from "./contexts/TaskContext";
import SettingsScreen from "./pages/SettingsScreen";

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
}

export type DrawerParamList = {
    Tasks: undefined;
    Logged?: undefined;
    Calendar: undefined;
    Profile: undefined;
    Habits: undefined;
    Settings: undefined;
    Statistics: undefined;

}

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const settingsContext = useSettings();
    const {darkMode, toggleDarkMode} = settingsContext;
    const handleLogin = (result: any) => {
        setLoggedIn(result)
    };

    const handleLogout = () => {
        setLoggedIn(false)
    }

    return (

        <SettingsProvider>
            <TaskProvider>
            <NavigationContainer>
                {loggedIn ? (
                    <Drawer.Navigator initialRouteName="Logged" drawerContent={(props) => (
                        <CustomDrawerContent {...props} onLogout={handleLogout}/>
                    )}>
                        <Drawer.Screen name="Tasks" component={TaskScreen}/>
                        <Drawer.Screen name="Calendar" component={CalendarScreen}/>
                        <Drawer.Screen name="Profile" component={ProfileScreen}/>
                        <Drawer.Screen name="Habits" component={HabitScreen}/>
                        <Drawer.Screen name={'Settings'} component={SettingsScreen}/>
                        <Drawer.Screen name={"Statistics"} component={StatisticsScreen}/>
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
            </TaskProvider>
        </SettingsProvider>
    );

}

export default App;