import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { styles } from './styles'
import { shadow, priority, statusTask } from '../../utils/index'
import { Button, Overlay } from '@rneui/themed'
import { TaskDto } from '../../helper/interface'
import { userStorage, convertJsonToString, userKeyStorage } from '../../helper/async-storage'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


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


interface IBtnAddTaskProps {
    btnType: 'add' | 'update',
    updateData?: (id: string, data: TaskDto) => void,
    deleteData?: (id: string) => void,
    dataUpdate?: TaskDto,
    customBtn?: JSX.Element
}

const BtnAddTask = (props: IBtnAddTaskProps) => {

    const { btnType, updateData, deleteData, dataUpdate, customBtn } = props
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState<TaskDto>({});

    useEffect(() => {
        if (btnType === 'update') {
            setData(dataUpdate as TaskDto)
        }

        if (!visible) {
            setData({})
        }


    }, [dataUpdate, visible])

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

    const handleSubmit = () => {
        if (btnType === 'add') {
            executeCreate()
        } else {
            executeUpdate()
        }

        toggleOverlay()
    }

    const executeUpdate = () => {
        if (updateData) {
            updateData(data.id as string, data)
        }
    }

    const executeCreate = () => {
        const getData = userStorage.getString(userKeyStorage.today)
        const newData = getData ? JSON.parse(getData) : []
        data.id = newData.length + 1
        data.status = 'TODO'
        newData.push(data)
        const stringData = convertJsonToString(newData)
        userStorage.set(userKeyStorage.today, stringData)
    }

    const renderBtnByType = useCallback(() => {
        if (btnType === 'add') {
            return <TouchableOpacity onPress={toggleOverlay} style={[styles.addTaskButton, shadow.boxShadowTiny]} activeOpacity={0.7}>
                <Text style={styles.addTaskText}>+ Add Task</Text>
            </TouchableOpacity>
        } else {
            return <TouchableOpacity onPress={toggleOverlay} activeOpacity={0.7}>
                <Text style={styles.textModify}>Modify</Text>
            </TouchableOpacity>
        }
    }, [data, btnType, visible])


    return (
        <View>
            {renderBtnByType()}

            <Overlay overlayStyle={styles.overlayContainer} isVisible={visible} onBackdropPress={() => { }}>
                <KeyboardAwareScrollView
                    style={{ flex: 1 }}
                    scrollEnabled={true}
                >
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
                        <TextInput defaultValue={data?.title} value={data?.title} onChange={(e) => handleTextChange('title', e.nativeEvent.text)} style={styles.inputTitle} multiline placeholder='Title' />
                    </View>

                    <ScrollView automaticallyAdjustKeyboardInsets showsVerticalScrollIndicator={false}>
                        <Text>Description</Text>
                        <TextInput defaultValue={data?.description} value={data?.description} onChange={(e) => handleTextChange('description', e.nativeEvent.text)} style={styles.inputTitle} multiline placeholder='Description' />
                    </ScrollView>
                </KeyboardAwareScrollView>

                <View style={styles.btnContainer}>
                    <Button onPress={toggleOverlay} buttonStyle={styles.btnClose}>Close</Button>
                    <Button onPress={handleSubmit} buttonStyle={styles.btnCreate} disabled={disableBtn()}>Save</Button>
                </View>
            </Overlay>
        </View>
    )
}

export default BtnAddTask
