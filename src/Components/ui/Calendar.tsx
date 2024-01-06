import {Calendar} from "react-native-calendars";
import {useState} from "react";

interface calendarProps {
    onDayPress: (day: any) => void;
    markedDates: {
        [selected: string]: {
            selected: boolean;
            disableTouchEvent: boolean;
            selectedColor: string;
        };
    };
}

const CustomCalendar: React.FC<calendarProps> = () => {
    const [selected, setSelected] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleDayPress = (day: any) => {
        setSelectedDate(day.dateString);
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    const handleAddTask = (taskText: string) => {
        // Implement logic to add the task to the selected date.
        console.log(taskText)

    }
    return (
        <Calendar onDayPress={date => {
            handleDayPress(date)
            setSelectedDate(date)
        }}>
        </Calendar>
    )
}
export default CustomCalendar;