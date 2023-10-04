import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
    const {onLogout} = props;
    const handleLogout = () => {
        onLogout();
    };

    return (
        <DrawerContentScrollView>
            <DrawerItemList {...props} />
            <View style={styles.logoutButtonContainer}>
                <Button title="Log Out" onPress={handleLogout}/>
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    logoutButtonContainer: {
        padding: 16,
    },
});

export default CustomDrawerContent;
