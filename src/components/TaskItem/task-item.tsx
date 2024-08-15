
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Card, Chip, Dialog, Divider, Icon, Overlay } from '@rneui/themed';
import { shadow, bg } from '../../utils/index'


interface TaskItemProps {
    title: string;
    description?: string;
    status?: string;
    priority?: string;
    showAction: boolean;
}


type TaskBtn = {
    title: string;
    description?: string;
}

const TaskBtn = ({ title, description }: TaskBtn) => {
    return <SafeAreaView>
        <TouchableOpacity>
            <Icon type='ionicon' name='ellipsis-horizontal-outline' size={25} />
        </TouchableOpacity>
    </SafeAreaView>
}


const TaskItem = (props: TaskItemProps) => {
    const { title, description, status, showAction = false, priority } = props

    return (
        <Card containerStyle={[styles.taskContainer]}>
            <View style={styles.taskTitle}>
                <Text style={styles.textTitle}>{title}</Text>
                {showAction && <TouchableOpacity>
                    <Icon type='ionicon' name="ellipse-outline" size={30} />
                </TouchableOpacity>}
            </View>
            <Text style={styles.textDescription}>{description}</Text>
            <View style={styles.footerContent}>
                <Chip title={priority} />
                <TouchableOpacity>
                    <Icon type='ionicon' name='ellipsis-horizontal-outline' size={25} />
                </TouchableOpacity>
            </View>
        </Card>
    )
}

export default TaskItem
