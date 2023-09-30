import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Calendar} from "react-native-calendars";
import NewTaskPopup from "../Components/NewTaskPopup";

const CalendarScreen = () => {
    const [selected, setSelected] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    const handleAddTask = (taskText) => {
        // Implement logic to add the task to the selected date.
        console.log(taskText)
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kalendarz</Text>
            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString);
                    handleDayPress(day)
                }}
                markedDates={{
                    [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
                }}
            />
            <NewTaskPopup visible={isPopupVisible} onAddTask={handleAddTask} onClose={handleClosePopup}/>
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
