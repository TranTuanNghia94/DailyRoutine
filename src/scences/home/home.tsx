import { Text, View } from 'react-native'
import React from 'react'
import { container, shadow } from '../../utils/styles'
import HeaderHome from '../../components/HeaderHome/header-home'
import { styles } from './styles'
import CardItem from '../../components/CardItem/card-item'
import { ParamListBase, RouteProp, useNavigation } from '@react-navigation/native'

interface IHomeProps {
    route: RouteProp<ParamListBase, "Home">;
    navigation: any;
}


const Home = (props: IHomeProps) => {
    const { navigation } = props;

    return (
        <View style={[container.container, container.bgBase]}>
            <HeaderHome />

            <View style={[styles.container, shadow.boxShadowSmall]}>
                <View style={styles.itemContainer}>
                    <CardItem label='Tasks' type='ionicon' icon='bulb-outline' size={50} onPress={() => navigation.navigate('Tasks')} />
                    <CardItem label='Daily tasks' type='ionicon' icon='calendar-outline' size={50} onPress={() => navigation.navigate('DailyTask')} />
                    <CardItem label='Scheduled tasks' type='ionicon' icon='stopwatch-outline' size={50} />
                    <CardItem label='Other' type='ionicon' icon='settings-outline' size={50} />
                </View>
            </View>
        </View>
    )
}

export default Home;