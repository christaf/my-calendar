import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
// import { useSettings } from '../contexts/SettingsContext'; // Import useSettings

const SettingsScreen = () => {
    // const { darkMode, toggleDarkMode } = useSettings(); // Access settings and functions from the context

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings Screen</Text>
            <View style={styles.settingItem}>
                <Text style={styles.settingLabel}>Dark Mode</Text>
                <Switch
                    // value={darkMode}
                    // onValueChange={toggleDarkMode}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    // thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    settingLabel: {
        fontSize: 18,
    },
});

export default SettingsScreen;
