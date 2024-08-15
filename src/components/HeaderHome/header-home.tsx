

import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { Avatar, Text } from '@rneui/themed'
import { txt } from '../../utils/color'
import { container } from '../../utils/styles'
import { ITaskDto } from '../../helper/interface'
import { userKeyStorage, userStorage } from '../../helper/async-storage'

const url = 'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg'

const HeaderHome = () => {
    const [tasks, setTasks] = useState<ITaskDto[]>([])


    useEffect(() => {
        userStorage.addOnValueChangedListener(() => {
            getData()
        });
    }, [])

    const getData = () => {
        const getData = userStorage.getString(userKeyStorage.today)
        if (getData) {
            setTasks(JSON.parse(getData))
        }
    }


    return (
        <View style={[styles.container, container.containerPadding]}>
            <View>
                <Text>Hello Nghia</Text>
                <Text style={styles.label} h4>You've got</Text>
                <Text style={styles.label} h4Style={{ color: txt.textPrimary10 }} h4>{tasks.length} tasks today</Text>
            </View>

            <View>
                <Avatar size={70} rounded source={{ uri: url }} />
            </View>
        </View>
    )
}

export default HeaderHome;
