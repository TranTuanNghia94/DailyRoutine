import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { shadow, bg } from '../../utils/index'
import { Avatar } from '@rneui/themed'
import { NavigationHelpers, ParamListBase, RouteProp, TabNavigationState } from '@react-navigation/native'
import { BottomTabDescriptorMap, BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import { EdgeInsets } from 'react-native-safe-area-context'

interface ITabBarProps {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
    insets: EdgeInsets;
}


const CustomTabBar = ({ navigation }: ITabBarProps) => {
    return (
        <View style={[styles.tabContainer, shadow.boxShadowTiny]}>
            <View style={styles.tabContent}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Tasks')}>
                    <Avatar rounded size={50} icon={{ name: 'calendar-outline', type: 'ionicon' }} containerStyle={styles.tabIconContent} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Home')}>
                    <Avatar rounded size={50} icon={{ name: 'home-outline', type: 'ionicon' }} containerStyle={styles.tabIconContent} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8}>
                    <Avatar rounded size={50} icon={{ name: 'person-outline', type: 'ionicon' }} containerStyle={styles.tabIconContent} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomTabBar
