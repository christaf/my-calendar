import React, { useState } from 'react';
import {View, Text, TextInput, FlatList, StyleSheet, Button} from 'react-native';

const TaskScreen = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, id: Date.now(), done: false }]);
            setNewTask('');
        }
    };

    const toggleTask = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, done: !task.done } : task
            )
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista zadań</Text>
            <TextInput
                style={styles.input}
                placeholder="Dodaj nowe zadanie"
                value={newTask}
                onChangeText={(text) => setNewTask(text)}
            />
            <Button title="Dodaj zadanie" onPress={addTask} />
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Button
                        onPress={() => toggleTask(item.id)}
                        style={[
                            styles.taskItem,
                            { backgroundColor: item.done ? 'lightgray' : 'white' },
                        ]}
                    >
                        <Text
                            style={{
                                textDecorationLine: item.done ? 'line-through' : 'none',
                            }}
                        >
                            {item.text}
                        </Text>
                    </Button>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 8,
        paddingHorizontal: 8,
    },
    taskItem: {
        padding: 12,
        marginVertical: 4,
        borderRadius: 5,
    },
});

export default TaskScreen;
