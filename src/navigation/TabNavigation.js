import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../theme/Colors';
import MyCalendar from '../screens/MyCalendar';
import GymNavigation from './GymNavigation';
import ProfileNavigation from './ProfileNavigation';
import AdminNavigation from './AdminNavigation';
import { useGetUsersListQuery } from '../services/gymApi';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setCurrentUser } from '../redux/slices/authSlice'; 

const Tab = createBottomTabNavigator();

const TabNavigation = () => {

    const { data: userData, error, isLoading } = useGetUsersListQuery();
    const dispatch = useDispatch();
    const [loginUser, setLoginUser] = useState(null);
    const [admin, setAdmin] = useState(false);

    const currentUser = useSelector(state => state.authSlice.currentUser);

    useEffect(() => {
        console.log("entro al useEffect")
        const getUserData = async () => {
            try {
                if (!isLoading && loginUser === null) {
                    const userEmail = await AsyncStorage.getItem("userEmail");
                    const foundUser = userData?.find((usuario) => usuario.email === userEmail);
                    if (foundUser) {
                        setLoginUser(foundUser);
                        dispatch(setCurrentUser(foundUser));
                    }
                }
            } catch (error) {
                console.log("Error al traer datos del usuario: ", error);
            }
        };

        getUserData();
    }, [isLoading, loginUser, userData, dispatch]);


    useEffect(() => {
        try {
            if (currentUser && currentUser.isAdmin === true) {
                console.log("entro atr");
                setAdmin(true);
            }
        } catch (error) {
            console.log("error al habilitar admin: ", error);
        }
    }, [currentUser]);



    useEffect(() => {
        if (error) {
            console.error('Error al cargar la lista de usuarios:', error);
        }
    }, [error]);
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                title: "",
                tabBarStyle: {
                    backgroundColor: Colors.green,
                    height: 60,
                }
            }}>
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
            /> : null}

        </Tab.Navigator>

    )
}


export default TabNavigation