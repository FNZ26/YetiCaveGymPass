import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import History from '../screens/History';


const Stack = createNativeStackNavigator();

const ProfileNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='profile'
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen component={Profile} name="profile" />
            <Stack.Screen component={History} name="history" />


        </Stack.Navigator>
    )
}

export default ProfileNavigation

const styles = StyleSheet.create({})

