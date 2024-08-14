import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { bg } from '../utils/index'
import Home from '../scences/home/home';
import DailyTask from '../scences/daily-task/daily-task';
import Tasks from '../scences/task/task';
import CustomTabBar from '../components/CustomTabBar/custom-tab-bar';
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

const screenOptions = (title: string): NativeStackNavigationOptions => {
  return {
    headerStyle: {
      backgroundColor: bg.bgPrimary5
    },
    headerTitle: title,
    headerTintColor: bg.bgPrimary10,
    headerBackTitleVisible: false,
  }
}

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName='Home'>
      <HomeStack.Screen name="Home" options={{ headerShown: false }}>
        {(props) => <Home {...props} />}
      </HomeStack.Screen>

      <HomeStack.Screen name="DailyTask" options={screenOptions('Daily Task')} >
        {() => <DailyTask />}
      </HomeStack.Screen>
      <HomeStack.Screen name="Tasks" options={screenOptions(`Today's Tasks`)} >
        {() => <Tasks />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

export const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Dashboard" component={HomeStackScreen} />
    </Tab.Navigator>
  )
}
