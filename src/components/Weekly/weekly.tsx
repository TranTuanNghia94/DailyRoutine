import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import moment from 'moment';

const Weekly = () => {
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Calculate the last day of the month
    const lastDayOfMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();

    const monthNumberToText = (monthNumber: number) => {
        return moment().month(monthNumber - 1).format('MMM');
      }
      

    return (
        <View>
            <ScrollView horizontal style={styles.daysContainer} showsHorizontalScrollIndicator={false}>
                {[...daysOfWeek, ...daysOfWeek, ...daysOfWeek, ...daysOfWeek].map((day, index) => {
                    // Calculate the day number
                    let dayNumber = date - (dayIndex - index);
                    let m = month;
                    // Reset the day number if it's greater than the last day of the month
                    if (dayNumber > lastDayOfMonth) {
                        m = m + 1;
                        dayNumber = dayNumber % lastDayOfMonth;
                        if (dayNumber === 0) dayNumber = lastDayOfMonth;
                    } else if (dayNumber < 1) {
                        dayNumber = lastDayOfMonth + dayNumber;
                    }
                    return (
                        <TouchableOpacity key={index} style={[styles.dayItem, index === dayIndex && styles.selectedDay]}>
                            <Text style={styles.dayText}>{monthNumberToText(m)}</Text>
                            <Text style={styles.dayText}>{day}</Text>
                            <Text style={styles.dayDate}>{dayNumber}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    )
}

export default Weekly
