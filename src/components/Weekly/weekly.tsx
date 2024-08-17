import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { styles } from './styles'
import moment from 'moment';
import { DateSelectDto } from '../../helper/interface';

interface WeeklyProps {
    onSelect?: (dateData: DateSelectDto) => void;
    dataSelect?: DateSelectDto
}


const Weekly = (props: WeeklyProps) => {
    const { onSelect, dataSelect } = props

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

    const onSelectDay = (day: number, month: number, year: number, index: number) => {
        onSelect && onSelect({ day, month, year, weekday: index })
    }


    const styleSelected = (index: number) => {
        if (dataSelect) {
            return dataSelect.weekday === index && styles.selectedDay;
        }

        return index === dayIndex && styles.selectedDay;
    }

    const renderDay = useCallback((index: number, day: string, dayNumber: number, m: number) => {
        return <TouchableOpacity key={index} onPress={() => onSelectDay(dayNumber, m, year, index)}
            style={[styles.dayItem, styleSelected(index)]}>
            <Text style={styles.dayText}>{monthNumberToText(m)}</Text>
            <Text style={styles.dayText}>{day}</Text>
            <Text style={styles.dayDate}>{dayNumber}</Text>
        </TouchableOpacity>
    }, [dataSelect])

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
                    return renderDay(index, day, dayNumber, m);
                })}
            </ScrollView>
        </View>
    )
}

export default Weekly
