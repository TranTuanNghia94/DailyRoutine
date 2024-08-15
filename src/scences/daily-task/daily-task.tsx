import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { Icon } from '@rneui/themed';
import { shadow } from '../../utils/index'
import Weekly from '../../components/Weekly/weekly';
import { ITaskDto } from '../../helper/interface';
import TaskItem from '../../components/TaskItem/task-item';
import { userKeyStorage, userStorage } from '../../helper/async-storage';


const DailyTask = () => {
    const [tasks, setTasks] = useState<ITaskDto[]>([])

    useEffect(() => {
        userStorage.addOnValueChangedListener(() => {
            getData()
        });
    }, [])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        const getData = userStorage.getString(userKeyStorage.today)
        if (getData) {
            setTasks(JSON.parse(getData))
        }
    }

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
            {/* <ScrollView style={styles.scheduleContainer} showsVerticalScrollIndicator={false}> */}
            <FlatList
                data={tasks}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <TaskItem priority={item.priority} title={item.title as string} description={item.description} status={item.status} showAction={false} />}
                keyExtractor={(item) => item.title as string}
                contentContainerStyle={[]}
            />

            {/* </ScrollView> */}
        </View >
    );
}

export default DailyTask