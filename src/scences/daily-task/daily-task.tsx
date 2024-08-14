import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { Icon } from '@rneui/themed';
import { shadow } from '../../utils/index'
import Weekly from '../../components/Weekly/weekly';


const DailyTask = () => {

    return (
        <View style={styles.container}>
            {/* Date Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.date}>16 September</Text>
                    <Text style={styles.today}>Today</Text>
                </View>

                <View>
                    <TouchableOpacity style={[styles.addTaskButton, shadow.boxShadowSmall]}>
                        <Text style={styles.addTaskText}>+ Add Task</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Weekly />


            {/* Schedule List */}
            <ScrollView style={styles.scheduleContainer} showsVerticalScrollIndicator={false}>

                <View style={[styles.scheduleContent, shadow.boxShadowTiny]}>
                    <Text style={styles.subjectText}>Task A</Text>
                    <View style={styles.statusContent}>
                        <Icon type='ionicon' name='alert-circle-outline' color={'orange'} size={24} />
                        <Text style={[styles.statusText, styles.textOrange]}>In-progress</Text>
                    </View>
                </View>


                <View style={[styles.scheduleContent, shadow.boxShadowTiny]}>
                    <Text style={styles.subjectText}>Task B</Text>
                    <View style={styles.statusContent}>
                        <Icon type='ionicon' name='checkmark-circle-outline' color={'green'} size={24} />
                        <Text style={[styles.statusText, styles.textGreen]}>Done</Text>
                    </View>
                </View>


                <View style={[styles.scheduleContent, shadow.boxShadowTiny]}>
                    <Text style={styles.subjectText}>Task C</Text>
                    <View style={styles.statusContent}>
                        <Icon type='ionicon' name='close-circle-outline' color={'red'} size={24} />
                        <Text style={[styles.statusText, styles.textRed]}>Due date</Text>
                    </View>
                </View>

                <View style={[styles.scheduleContent, shadow.boxShadowTiny]}>
                    <Text style={styles.subjectText}>Task D</Text>
                    <View style={styles.statusContent}>
                        <Icon type='ionicon' name='ellipse-outline' color={'gray'} size={24} />
                        <Text style={[styles.statusText, styles.textGray]}>Plan</Text>
                    </View>
                </View>
            </ScrollView>
        </View >
    );
}

export default DailyTask