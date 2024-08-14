import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Card, Divider, Icon, Tab, TabView } from '@rneui/themed';
import { shadow, bg } from '../../utils/index'
import TaskItem from '../../components/TaskItem/task-item';

const tasks = [
  {
    id: '1',
    title: 'Create Wireframe',
    description: 'Crypto Wallet Redesign Crypto Wallet Redesign Crypto Wallet Redesign Crypto Wallet Redesign Crypto Wallet Redesign Crypto Wallet Redesign Crypto Wallet Redesign',
    time: '09:15 PM - 10:00 PM',
    status: 'Open',
    participants: ['John', 'Jane', 'Doe'],
  },
  {
    id: '2',
    title: 'Client Review & Feedback',
    description: 'Crypto Wallet Redesign',
    time: '10:00 PM - 11:45 PM',
    status: 'Open',
    participants: ['Alice', 'Bob'],
  },
];




const Tasks = () => {
  const [index, setIndex] = useState(0);


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
          <Tab.Item
            title="Plan"
            titleStyle={{ fontSize: 12 }}
          />
        </Tab>

        <TabView value={index} onChange={setIndex} animationType="spring" disableSwipe>
          <TabView.Item style={styles.tabView}>
            <FlatList
              data={tasks}
              renderItem={({ item }) => <TaskItem title={item.title} description={item.description} status={item.status} showAction />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={[]}
            />
          </TabView.Item>
          <TabView.Item style={styles.tabView}>
            <FlatList
              data={tasks}
              renderItem={({ item }) => <TaskItem title={item.title} description={item.description} status={item.status} showAction />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={[]}
            />
          </TabView.Item>
          <TabView.Item style={styles.tabView}>
            <FlatList
              data={tasks}
              renderItem={({ item }) => <TaskItem title={item.title} description={item.description} status={item.status} showAction />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={[]}
            />
          </TabView.Item>
        </TabView>
      </>
    </View>
  )
}

export default Tasks