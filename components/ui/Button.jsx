import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useSettings } from '../../contexts/SettingsContext';

export function MyButton({ title, onPress, style, children }) {
    const { darkMode } = useSettings();
    const buttonStyle = darkMode ? styles.buttonDark : styles.buttonLight;
    return (
        <TouchableOpacity style={[buttonStyle, style]} onPress={onPress}>
            {children || <Text style={styles.buttonText}>{title}</Text>}
        </TouchableOpacity>
    );
}

const styles = {
    buttonDark: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonLight: {
        backgroundColor: '#999',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
};
