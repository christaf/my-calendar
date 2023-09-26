import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal } from 'react-native';

const NewTaskPopup = ({ visible, onClose, onAddTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        // Validate taskText, and add the task to your data structure.
        onAddTask(taskText);
        setTaskText('');
        onClose();
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View>
                <Text>Add New Task</Text>
                <TextInput
                    placeholder="Task name"
                    value={taskText}
                    onChangeText={(text) => setTaskText(text)}
                />
                <Button title="Add Task" onPress={handleAddTask} />
                <Button title="Cancel" onPress={onClose} />
            </View>
        </Modal>
    );
};

export default NewTaskPopup;
