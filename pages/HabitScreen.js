import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { Icon } from 'react-native-elements';

const HabitScreen = () => {
    const [habits, setHabits] = useState([
        {
            id: 1,
            name: 'Morning Run',
            description: 'Run for 30 minutes every morning',
        },
        {
            id: 2,
            name: 'Reading',
            description: 'Read a book for 20 minutes daily',
        },
    ]);

    const toggleSettings = (habitId) => {
        console.log(`Settings for Habit ${habitId} clicked`);
    };

    const [newHabit, setNewHabit] = useState({ name: '', description: '' });

    const addHabit = () => {
        if (newHabit.name.trim() === '' || newHabit.description.trim() === '') {
            return;
        }

        const newHabitItem = {
            id: habits.length + 1,
            ...newHabit,
        };

        setHabits([...habits, newHabitItem]);
        setNewHabit({ name: '', description: '' });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Habits</Text>
            {habits.map((habit) => (
                <TouchableOpacity
                    key={habit.id}
                    style={styles.habitBox}
                    onPress={() => toggleSettings(habit.id)}
                >
                    <View>
                        <Text style={styles.habitName}>{habit.name}</Text>
                        <Text style={styles.habitDescription}>{habit.description}</Text>
                    </View>
                    <Icon
                        name="settings"
                        size={24}
                        color="black"
                        onPress={() => toggleSettings(habit.id)}
                    />
                </TouchableOpacity>
            ))}

            <View style={styles.addHabitContainer}>
                <TextInput
                    placeholder="Habit name"
                    style={styles.input}
                    value={newHabit.name}
                    onChangeText={(text) => setNewHabit({ ...newHabit, name: text })}
                />
                <TextInput
                    placeholder="Habit description"
                    style={styles.input}
                    value={newHabit.description}
                    onChangeText={(text) =>
                        setNewHabit({ ...newHabit, description: text })
                    }
                />
                <TouchableOpacity style={styles.addButton} onPress={addHabit}>
                    <Text style={styles.addButtonText}>Add Habit</Text>
                </TouchableOpacity>
            </View>
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
    },
    habitBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
    },
    habitName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    habitDescription: {
        fontSize: 14,
    },
    addHabitContainer: {
        marginVertical: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 8,
        padding: 8,
        marginBottom: 12,
    },
    addButton: {
        backgroundColor: 'lightgreen',
        borderRadius: 12,
        padding: 12,
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HabitScreen;