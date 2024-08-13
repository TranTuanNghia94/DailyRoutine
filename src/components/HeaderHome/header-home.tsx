

import { StyleSheet, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Avatar, Text } from '@rneui/themed'
import { txt } from '../../utils/color'
import { container } from '../../utils/styles'

const url = 'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg'

const HeaderHome = () => {
    return (
        <View style={[styles.container, container.containerPadding]}>
            <View>
                <Text>Hello Nghia</Text>
                <Text style={styles.label} h4>You've got</Text>
                <Text style={styles.label} h4Style={{ color: txt.textPrimary10 }} h4>4 tasks today</Text>
            </View>

            <View>
                <Avatar size={70} rounded source={{ uri: url }} />
            </View>
        </View>
    )
}

export default HeaderHome;
