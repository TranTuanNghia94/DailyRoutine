import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { Card, Divider, Icon, Tab, TabView } from '@rneui/themed';
import { shadow, bg } from '../../utils/index'
import TaskItem from '../../components/TaskItem/task-item';
import BtnAddTask from '../../components/ButtonAddTask/btn-add-task';
import { ITaskDto } from '../../helper/interface';
import { userKeyStorage, userStorage } from '../../helper/async-storage';

const Tasks = () => {
  const [index, setIndex] = useState(0);

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
      <>
        <Tab value={index} onChange={setIndex}
          indicatorStyle={styles.tabHeader}>
          <Tab.Item
            title="All"
            titleStyle={{ fontSize: 12 }}
          />
          <Tab.Item
            title="Done"
            titleStyle={{ fontSize: 12 }}
          />
        </Tab>

        <TabView value={index} onChange={setIndex} animationType="spring" disableSwipe>
          <TabView.Item style={styles.tabView}>
            <FlatList
              data={tasks}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <TaskItem priority={item.priority} title={item.title as string} description={item.description} status={item.status} showAction />}
              keyExtractor={(item) => item.title as string}
              contentContainerStyle={[]}
            />
          </TabView.Item>
          <TabView.Item style={styles.tabView}>
            <FlatList
              data={tasks}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <TaskItem priority={item.priority} title={item.title as string} description={item.description} status={item.status} showAction />}
              keyExtractor={(item) => item.title as string}
              contentContainerStyle={[]}
            />
          </TabView.Item>
        </TabView>
      </>

      <BtnAddTask />
    </View>
  )
}

export default Tasks