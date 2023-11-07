import React from 'react'
import Home from '../screens/Home';
import GymDetail from '../screens/GymDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const GymNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen component={Home} name="home" />
            <Stack.Screen component={GymDetail} name="gymDetail" />


        </Stack.Navigator>
    )
}

export default GymNavigation

