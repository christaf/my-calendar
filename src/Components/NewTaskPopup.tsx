import React, {useState} from 'react';
import {View, Text, TextInput, Button, Modal, StyleSheet} from 'react-native';

const NewTaskPopup = ({visible, onClose, onAddTask}: any) => {
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        // Validate taskText, and add the task to your data structure.
        onAddTask(taskText);
        setTaskText('');
        onClose();
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.container}>
                <Text style={styles.title}>Add New Task</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Task name"
                    value={taskText}
                    onChangeText={(text) => setTaskText(text)}
                />
                <Button title="Add Task" onPress={handleAddTask}/>
                <Button title="Cancel" onPress={onClose}/>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white', // Background color
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
    }
});

export default NewTaskPopup;
