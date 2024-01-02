import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import { useSettings } from '../../contexts/SettingsContext';

interface MyButtonProps {
    title?: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle> | undefined;
    children?: React.ReactNode;
}

export function MyButton({ title, onPress, style, children }: MyButtonProps) {
    const { darkMode } = useSettings();
    const buttonStyle: any = darkMode ? styles.buttonDark : styles.buttonLight;

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
    },
};
