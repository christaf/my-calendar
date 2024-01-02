import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
    const userData = {
        name: 'John Doe',
        currentRank: 'Gold',
        experience: 8500,
        achievements: [
            'Completed 100 tasks',
            'Reached Platinum Rank',
            'Achievement 3',
        ],
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/icon.png')} // Replace with the actual path to the user's profile picture
                    style={styles.profilePicture}
                />
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{userData.name}</Text>
                    <Text style={styles.rank}>Current Rank: {userData.currentRank}</Text>
                    <Text style={styles.experience}>Experience: {userData.experience} XP</Text>
                </View>
            </View>
            <Text style={styles.achievementsTitle}>Achievements:</Text>
            <View style={styles.achievementsContainer}>
                {userData.achievements.map((achievement, index) => (
                    <View key={index} style={styles.achievementBox}>
                        <Text style={styles.achievement}>{achievement}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50, // Make it circular
        marginRight: 16,
    },
    userInfo: {
        flex: 1,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    rank: {
        fontSize: 18,
        marginBottom: 4,
    },
    experience: {
        fontSize: 16,
        marginBottom: 8,
    },
    achievementsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    achievementsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    achievementBox: {
        backgroundColor: 'lightblue',
        borderRadius: 12,
        padding: 8,
        marginRight: 8,
        marginBottom: 8,
    },
    achievement: {
        fontSize: 14,
    },
});

export default ProfileScreen;
