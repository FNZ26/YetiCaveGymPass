import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from './TabNavigation';
import { useSelector } from 'react-redux';
import Login from '../screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';


//Para cuando incluya la parte de login y firebase 
//import { useSelector } from 'react-redux';

const MainNavigation = () => {
  const [checkedUser, setCheckedUser] = useState(null)
  const user = useSelector(state => state.authSlice.user);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userEmail = await AsyncStorage.getItem("userEmail",);
        userEmail ? setCheckedUser(userEmail) : setCheckedUser(user);

      } catch (error) {
        console.log("hubo error: ",error);
      }
    };
    checkUser();
  }, [user]);

  
  
  console.log("usuario: ", user)
  return (
    <NavigationContainer>
      {checkedUser ? <TabNavigation /> : <Login />}


    </NavigationContainer>

  );
}

export default MainNavigation