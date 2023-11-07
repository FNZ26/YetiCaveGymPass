import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../theme/Colors';






import MyCalendar from '../screens/MyCalendar';
import GymNavigation from './GymNavigation';
import ProfileNavigation from './ProfileNavigation';

import AdminNavigation from './AdminNavigation';





const Tab = createBottomTabNavigator();

const admin = true;

const TabNavigation = () => {

    
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
                name="gymNavigation" component={GymNavigation} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) =>
                    (

                        <FontAwesome name="calendar"
                            size={28}
                            color={focused ? Colors.yellow : Colors.white} />
                    )
                }}
                // name="ProfileNavigation" component={ProfileNavigation} 
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
                // name="ProfileNavigation" component={ProfileNavigation} 
                name="profileNavigation" component={ProfileNavigation}
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
                // name="ProfileNavigation" component={ProfileNavigation} 
                name="adminNavigation" component={AdminNavigation}
            /> : null }

        </Tab.Navigator>

    )
}


export default TabNavigation