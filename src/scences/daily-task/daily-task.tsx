import { View, Text, FlatList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { styles } from './styles';
import Weekly from '../../components/Weekly/weekly';
import { DateSelectDto, TaskDto } from '../../helper/interface';
import TaskItem from '../../components/TaskItem/task-item';
import { userKeyStorage, userStorage } from '../../helper/async-storage';
import moment from 'moment';
import BtnAddTask from '../../components/ButtonAddTask/btn-add-task';
import { deleteDataStorage, updateDataStorage } from '../../hoc/common-func';

const getDMY = () => {
    const day = moment().format('D')
    const month = moment().format('M')
    const year = moment().format('YYYY')

    const data: DateSelectDto = {
        day: Number(day),
        month: Number(month),
        year: Number(year),
        weekday: moment().day()
    }
    return data
}

const DailyTask = () => {
    const [tasks, setTasks] = useState<TaskDto[]>([])
    const [dateSelect, setDateSelect] = useState<DateSelectDto>(getDMY())
    const [keyStorage, setKeyStorage] = useState<string>(userKeyStorage.today)

    useEffect(() => {
        userStorage.addOnValueChangedListener((e) => {
            getData(keyStorage)
        });
    }, [])

    useEffect(() => {
        getData()
    }, [])

    const getData = useCallback((dataKey?: string) => {
        const getData = userStorage.getString(dataKey || keyStorage)
        if (getData) {
            setTasks(JSON.parse(getData))
        } else {
            setTasks([])
        }
    }, [])

    const getToday = () => {
        return moment().format('D MMMM YYYY')
    }

    const onSelect = useCallback((data: DateSelectDto) => {
        const { day, month, year, weekday } = data
        setDateSelect({ day, month, year, weekday })

        const dateFormat = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD').format('YYYY-MM-DD')
        setKeyStorage(dateFormat)
        getData(dateFormat)
    }, [dateSelect])

    const updateData = (id: string, dataTask: TaskDto) => {
        updateDataStorage({ id, keyData: keyStorage, dataTask, data: tasks, callBackFunc: setTasks })
    }

    const deleteData = (id: string) => {
        deleteDataStorage({ id, keyData: keyStorage, data: tasks, callBackFunc: setTasks })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.date}>{getToday()}</Text>
                    <Text style={styles.today}>Today</Text>
                </View>

                <View>
                    <BtnAddTask btnType='add' keyStorage={keyStorage} />
                </View>
            </View>

            <Weekly onSelect={onSelect} dataSelect={dateSelect} />

            <FlatList
                data={tasks}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <TaskItem deleteData={deleteData} updateData={updateData} itemData={item} onlyView />}
                keyExtractor={(item) => item.title as string}
                contentContainerStyle={[]}
            />
        </View >
    );
}

export default DailyTask