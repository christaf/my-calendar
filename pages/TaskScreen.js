import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet, Button} from 'react-native';
import {CheckBox} from "react-native-web";
import TaskDetailModal from "../Components/TaskDetailModal";

const TaskScreen = () => {
    //TODO use context to store tasks
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [selectedTask, setSelectedTask] = useState(null);
    const [dueDate, setDueDate] = useState(null);

    const addTask = () => {
        if (newTask.trim() === '') {
            return;
        }
        let currentDate;
        if (dueDate) {
            let day = dueDate.getDate();
            let month = dueDate.getMonth() + 1;
            let year = dueDate.getFullYear();

            currentDate = `${day}-${month}-${year}`;
        } else {
            currentDate = "no due date"
        }
        const task = {
            id: Math.random().toString(),
            text: newTask,
            done: false,
            dueDate: currentDate,
        };

        setTasks([...tasks, task]);
        setNewTask('');
        setDueDate(null);
    };

    const toggleTask = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? {...task, done: !task.done} : task
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
            <Button title="Dodaj zadanie" onPress={addTask}/>
            <View style={{marginBottom: 10}}>
                {newTask.trim() !== '' && (
                    <Button
                        title="Wybierz datę"
                        onPress={() => {
                            setDueDate(new Date());
                        }}
                    />
                )}
            </View>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View style={styles.taskItem}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <CheckBox
                                value={item.done}
                                onValueChange={() => toggleTask(item.id)}
                            />
                            <Text
                                style={{
                                    marginLeft: 8,
                                    textDecorationLine: item.done ? 'line-through' : 'none',
                                }}
                            >
                                {item.text}
                            </Text>
                            <View style={{marginLeft: 10}}>
                                <Button
                                    title="Details"
                                    onPress={() => setSelectedTask(item)}
                                />
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Button
                                    title="Usuń"
                                    onPress={() =>
                                        setTasks(tasks.filter((task) => task.id !== item.id))
                                    }
                                />
                            </View>
                        </View>
                    </View>
                )}
            />
            {selectedTask && (
                <TaskDetailModal
                    task={selectedTask}
                    visible={!!selectedTask}
                    onClose={() => setSelectedTask(null)}
                />
            )}
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
        marginHorizontal: 8,
        borderRadius: 5,
    },
});

export default TaskScreen;
