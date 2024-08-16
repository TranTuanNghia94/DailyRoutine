
import { Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { styles } from './styles'
import { BottomSheet, Card, Chip, Divider, Icon, ListItem } from '@rneui/themed';
import { TaskDto } from '../../helper/interface';
import BtnAddTask from '../ButtonAddTask/btn-add-task';
import { priority as level } from '../../utils/index'


interface TaskItemProps {
    itemData: TaskDto;
    onlyView?: boolean;
    updateData?: (id: string, dataTask: TaskDto) => void
    deleteData?: (id: string) => void
}

const TaskItem = (props: TaskItemProps) => {
    const { itemData, onlyView = false, updateData, deleteData } = props
    const { title, description, status, priority } = itemData

    const [iconName, setIconName] = useState('ellipse-outline')
    const [taskStatus, setTaskStatus] = useState<string>(status as string)
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        status === 'TODO' ? setIconName('ellipse-outline') : setIconName('checkmark-circle-outline')
        setTaskStatus(status as string)
    }, [])

    const handlePress = () => {
        const newStatus = taskStatus === 'TODO' ? 'DONE' : 'TODO';
        const newIconName = newStatus === 'DONE' ? 'checkmark-circle-outline' : 'ellipse-outline';

        setTaskStatus(newStatus)
        setIconName(newIconName)

        if (updateData) {
            updateData(itemData.id as string, { ...itemData, status: newStatus })
        }
    }

    const renderIcon = useCallback(() => {
        return <TouchableOpacity disabled={onlyView} onPress={handlePress}>
            <Icon type='ionicon' name={iconName} size={35} />
        </TouchableOpacity>
    }, [iconName, status])


    const handleDelete = () => {
        setIsVisible(!isVisible)
        if (deleteData) {
            deleteData(itemData.id as string)
        }
    }

    const handleUpdate = (id: string, data: TaskDto) => {
        setIsVisible(!isVisible)

        if (updateData) {
            updateData(id, data)
        }
    }

    const handleColor = () => {
        const colorLevel = {
            HIGH: 'red',
            IMPORTANT: 'green',
            NORMAL: 'blue'
        }

        return colorLevel[priority as keyof typeof colorLevel]
    }

    const renderOverlay = useCallback(() => {
        return <>
            <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                <Icon type='ionicon' name='ellipsis-horizontal-outline' size={25} />
            </TouchableOpacity>
            <BottomSheet modalProps={{}} isVisible={isVisible} backdropStyle={{ marginVertical: 40 }} containerStyle={{ paddingVertical: 20 }} >
                <ListItem containerStyle={styles.listItemContainer}>
                    <ListItem.Content>
                        <View style={styles.itemContent}>
                            <BtnAddTask btnType='update' updateData={handleUpdate} dataUpdate={itemData} />
                        </View>

                        <Divider style={styles.divider} orientation='horizontal' width={2} />

                        <TouchableOpacity style={styles.itemContent} onPress={handleDelete}>
                            <Text style={styles.textDelete}>Delete</Text>
                        </TouchableOpacity>

                        <Divider style={styles.divider} orientation='horizontal' width={2} />

                        <TouchableOpacity style={styles.itemContent} onPress={() => setIsVisible(!isVisible)}>
                            <Text style={styles.textModify}>Cancel</Text>
                        </TouchableOpacity>

                    </ListItem.Content>
                </ListItem>
            </BottomSheet>
        </>

    }, [isVisible])


    const renderCard = useCallback(() => {
        return <Card containerStyle={[styles.taskContainer]}>
            <View style={styles.taskTitle}>
                <Text style={styles.textTitle}>{title}</Text>
                {renderIcon()}
            </View>
            <Text numberOfLines={3} ellipsizeMode='tail' style={styles.textDescription}>{description}</Text>
            <View style={styles.footerContent}>
                <Chip color={handleColor()} title={priority} />
                {renderOverlay()}
            </View>
        </Card>
    }, [iconName, isVisible])


    return renderCard()
}

export default TaskItem
