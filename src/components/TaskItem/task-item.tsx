
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Card, Dialog, Divider, Icon } from '@rneui/themed';
import { shadow, bg } from '../../utils/index'


interface TaskItemProps {
    title: string;
    description?: string;
    status?: string;
    showAction: boolean;
}


const TaskBtn = (title: string, description?: string) => {
    const [visible, setVisible] = useState(false);

    return <SafeAreaView>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Icon type='ionicon' name="ellipsis-vertical-outline" size={25} />
        </TouchableOpacity>
        <Dialog
            overlayStyle={{ borderRadius: 10 }}
            isVisible={visible}
            onBackdropPress={() => setVisible(!visible)}>
            <TextInput value={title} style={styles.dialogTitle} />

           <TextInput value={description} numberOfLines={10} multiline />

            <Divider style={styles.divider} width={1} color={bg.bgPrimary10} />

            <View style={styles.dialogFooter}>
                <Text>Save</Text>
                <Divider orientation='vertical' width={1} />
                <Text>Done</Text>
                <Divider orientation='vertical' width={1} />
                <Text>Remove</Text>
            </View>

        </Dialog>
    </SafeAreaView>
}



const TaskItem = (props: TaskItemProps) => {
    const { title, description, status, showAction = false } = props

    return (
        <Card containerStyle={[styles.taskContainer]}>
            <View style={styles.taskTitle}>
                <Text style={styles.textTitle}>{title}</Text>
                {showAction && TaskBtn(title, description)}
            </View>

            <View>
                <Text style={styles.textDescription}>{description}</Text>
            </View>

            <Divider style={styles.divider} width={1} color={bg.bgPrimary10} />

            <View>
                <Text>Status: {status}</Text>
            </View>
        </Card>
    )
}

export default TaskItem
