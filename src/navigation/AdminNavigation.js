import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Admin from '../screens/Admin';
import AddClass from '../screens/AddClass';

const Stack = createNativeStackNavigator();

const AdminNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='admin'
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen component={Admin} name="admin" />
            <Stack.Screen component={AddClass} name="addClass" />


        </Stack.Navigator>
    )
}

export default AdminNavigation

