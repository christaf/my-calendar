import React from 'react';
import { Button } from 'react-native';

const LogoutButton = ({ onLogout }) => {
    const handleLogout = () => {
        onLogout();
    };

    return <Button title="Log Out" onPress={handleLogout} />;
};

export default LogoutButton;