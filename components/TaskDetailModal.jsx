import React from 'react';
import { View, Text, Button, Modal } from 'react-native';

function TaskDetailModal({ task, visible, onClose }) {
    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                    <Text>Task: {task.text}</Text>
                    <Text>Due Date: {task.dueDate ? task.dueDate : 'No due date'}</Text>
                    <Button title="Close" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
}
export default TaskDetailModal;