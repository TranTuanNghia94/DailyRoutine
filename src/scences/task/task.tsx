import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { Tab, TabView } from '@rneui/themed';
import TaskItem from '../../components/TaskItem/task-item';
import BtnAddTask from '../../components/ButtonAddTask/btn-add-task';
import { TaskDto, TaskStatus } from '../../helper/interface';
import { userKeyStorage, userStorage } from '../../helper/async-storage';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { deleteDataStorage, updateDataStorage } from '../../hoc/common-func';


interface ITasksProps {
  route: RouteProp<ParamListBase, "Tasks">;
  navigation: any;
}

const Tasks = (props: ITasksProps) => {
  const [index, setIndex] = useState(0);
  const [tasks, setTasks] = useState<TaskDto[]>([])

  useEffect(() => {
    userStorage.addOnValueChangedListener(() => {
      getData()
    });

    getData()
  }, [])

  const getData = () => {
    const getData = userStorage.getString(userKeyStorage.today)
    if (getData) {
      setTasks(JSON.parse(getData))
    }
  }

  const updateData = (id: string, dataTask: TaskDto) => {
    updateDataStorage({ id, keyData: userKeyStorage.today, dataTask, data: tasks, callBackFunc: setTasks })
  }

  const deleteData = (id: string) => {
    deleteDataStorage({ id, keyData: userKeyStorage.today, data: tasks, callBackFunc: setTasks })
  }

  const handlFilter = (status: TaskStatus) => {
    return tasks.filter((task) => task.status === status)
  }

  return (
    <View style={styles.container}>
      <>
        <Tab value={index} onChange={setIndex}
          indicatorStyle={styles.tabHeader}>
          <Tab.Item
            title="All"
            titleStyle={styles.titleText}
          />
          <Tab.Item
            title="Todo"
            titleStyle={styles.titleText}
          />
          <Tab.Item
            title="Done"
            titleStyle={styles.titleText}
          />
        </Tab>

        <TabView value={index} onChange={setIndex} animationType="spring" disableSwipe>
          <TabView.Item style={styles.tabView}>
            <FlatList
              data={tasks}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <TaskItem deleteData={deleteData} updateData={updateData} itemData={item} />}
              keyExtractor={(item) => item.title as string}
              contentContainerStyle={[]}
            />
          </TabView.Item>
          <TabView.Item style={styles.tabView}>
            <FlatList
              data={handlFilter('TODO')}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <TaskItem itemData={item} />}
              keyExtractor={(item) => item.title as string}
              contentContainerStyle={[]}
            />
          </TabView.Item>
          <TabView.Item style={styles.tabView}>
            <FlatList
              data={handlFilter('DONE')}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <TaskItem itemData={item} onlyView />}
              keyExtractor={(item) => item.title as string}
              contentContainerStyle={[]}
            />
          </TabView.Item>
        </TabView>
      </>

      <BtnAddTask btnType='add' />
    </View>
  )
}

export default Tasks