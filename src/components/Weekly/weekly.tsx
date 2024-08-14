import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'

const Weekly = () => {
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    const date = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];



    return (
        <View>
            <ScrollView horizontal style={styles.daysContainer}>
                {daysOfWeek.map((day, index) => (
                    <TouchableOpacity key={index} style={[styles.dayItem, index === dayIndex && styles.selectedDay]}>
                        <Text style={styles.dayText}>{day}</Text>
                        <Text style={styles.dayDate}>{date - (dayIndex - index)}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default Weekly
