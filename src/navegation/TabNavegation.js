import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../theme/Colors';


import Profile from '../screens/Profile';
import Home from '../screens/Home';

import Admin from '../screens/Admin';
import MyCalendar from '../screens/MyCalendar';




const Tab = createBottomTabNavigator();

const admin = true;

const TabNavegation = () => {
    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                title: "",
                tabBarStyle: {
                    backgroundColor: Colors.green,
                    height: 60,


                }

            }}

        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) =>
                    (
                        <FontAwesome name="home"
                            size={28}
                            color={focused ? Colors.yellow : Colors.white} />
                    )
                }}
                name="home" component={Home} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) =>
                    (

                        <FontAwesome name="calendar"
                            size={28}
                            color={focused ? Colors.yellow : Colors.white} />
                    )
                }}
                // name="ProfileNavegation" component={ProfileNavigation} 
                name="myCalendar" component={MyCalendar}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) =>
                    (

                        <FontAwesome name="user"
                            size={28}
                            color={focused ? Colors.yellow : Colors.white} />
                    )
                }}
                // name="ProfileNavegation" component={ProfileNavigation} 
                name="profile" component={Profile}
            />
            {admin ? <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) =>
                    (

                        <FontAwesome name="shield"
                            size={28}
                            color={focused ? Colors.yellow : Colors.white} />
                    )
                }}
                // name="ProfileNavegation" component={ProfileNavigation} 
                name="admin" component={Admin}
            /> : null }

        </Tab.Navigator>

    )
}


export default TabNavegation