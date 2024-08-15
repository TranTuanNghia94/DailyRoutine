import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { shadow, bg, priority, statusTask } from '../../utils/index'
import { Button, Overlay } from '@rneui/themed'
import { ITaskDto } from '../../helper/interface'
import { userStorage, convertJsonToString, userKeyStorage } from '../../helper/async-storage'
import moment from 'moment'


const listLevelPriority = [
    {
        title: priority.NORMAL
    },
    {
        title: priority.IMPORTANT
    },
    {
        title: priority.HIGH
    }
]

const BtnAddTask = () => {
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState<ITaskDto>({});


    useEffect(() => {
        if (!visible) {
            setData({})
        }
    }, [visible])

    const toggleOverlay = () => {
        setVisible(!visible);
    }

    const handleTextChange = (id: string, val: string) => {
        if (val === '' || val === undefined) {
            setData({ ...data, [id]: null })
        }

        setData({ ...data, [id]: val })
    }

    const handleSelectPriority = (priority: string) => {
        setData({ ...data, priority: priority })
    }
    const isSelectedPriority = (priority: string) => {
        return data?.priority === priority
    }

    const disableBtn = () => {
        return !data?.title || !data?.priority
    }

    const handleSubmit = async () => {
        data.status = statusTask.TODO
        const getData = userStorage.getString(userKeyStorage.today)
        const newData = getData ? JSON.parse(getData) : []
        newData.push(data)
        const stringData = convertJsonToString(newData)
        userStorage.set(userKeyStorage.today, stringData)
        toggleOverlay()
    }


    return (
        <View>
            <TouchableOpacity onPress={toggleOverlay} style={[styles.addTaskButton, shadow.boxShadowTiny]} activeOpacity={0.7}>
                <Text style={styles.addTaskText}>+ Add Task</Text>
            </TouchableOpacity>

            <Overlay overlayStyle={styles.overlayContainer} isVisible={visible} onBackdropPress={toggleOverlay}>
                <View>
                    <Text>Priority</Text>
                    <View style={styles.levelChipContainer}>
                        {
                            listLevelPriority.map((item) =>
                                <Button key={item.title} onPress={() => handleSelectPriority(item.title)}
                                    type={isSelectedPriority(item.title) ? 'solid' : 'outline'}
                                    titleStyle={isSelectedPriority(item.title) ? styles.textBtn : styles.textOutlineBtn}
                                    buttonStyle={isSelectedPriority(item.title) ? styles.levelBtn : styles.levelOutlineBtn} title={item.title} />)
                        }
                    </View>
                </View>

                <View style={styles.spacingVertical}>
                    <Text>Title</Text>
                    <TextInput onChange={(e) => handleTextChange('title', e.nativeEvent.text)} style={styles.inputTitle} multiline placeholder='Title' returnKeyType='done' />
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <Text>Description</Text>
                    <TextInput onChange={(e) => handleTextChange('description', e.nativeEvent.text)} style={styles.inputTitle} multiline placeholder='Description' returnKeyType='done' />

                </ScrollView>

                <View>
                    <Button onPress={handleSubmit} buttonStyle={styles.btnCreate} disabled={disableBtn()}>Create</Button>
                </View>
            </Overlay>
        </View>
    )
}

export default BtnAddTask
