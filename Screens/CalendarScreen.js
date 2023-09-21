import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Calendar} from "react-native-calendars";

const CalendarScreen = () => {
    const [selected, setSelected] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kalendarz</Text>
            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default CalendarScreen;
