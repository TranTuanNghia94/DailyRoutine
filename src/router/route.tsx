import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../scences/sign-in/sign-in';
import Home from '../scences/home/home';
import { getItem, ITEM_KEYS } from '../helper/secure-storage';
import { HomeStackScreen } from './bottom-tab';

const Stack = createNativeStackNavigator();


const RouteWrapper = () => {
    const [signIn, setSignIn] = useState(false);

    useEffect(() => {
        checkSignIn()
    }, [signIn])

    const checkSignIn = async () => {
        const token = await getItem(ITEM_KEYS.token);

        if (token) {
            setSignIn(true)
        } else {
            setSignIn(false)
        }
    }

    if (signIn) {
        return <HomeStackScreen />
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    )
}

export default RouteWrapper