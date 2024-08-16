import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles';
import { shadow } from '../../utils/index'
import Weekly from '../../components/Weekly/weekly';
import { TaskDto } from '../../helper/interface';
import TaskItem from '../../components/TaskItem/task-item';
import { userKeyStorage, userStorage } from '../../helper/async-storage';
import moment from 'moment';


const DailyTask = () => {
    const [tasks, setTasks] = useState<TaskDto[]>([])

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
    const getToday = () => {
        return moment().format('D MMMM YYYY')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.date}>{getToday()}</Text>
                    <View>
                        
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={[styles.addTaskButton, shadow.boxShadowSmall]}>
                        <Text style={styles.addTaskText}>+ Add Task</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Weekly />

            <FlatList
                data={tasks}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <TaskItem itemData={item} onlyView />}
                keyExtractor={(item) => item.title as string}
                contentContainerStyle={[]}
            />


        </View >
    );
}

export default DailyTask