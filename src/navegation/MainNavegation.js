import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavegation from './TabNavegation';


//Para cuando incluya la parte de login y firebase 
//import { useSelector } from 'react-redux';

const MainNavigation = () => {

//useSelector(state => state.sliceAuth.user);
//ToDo: Poner el codigo de arriba para  habilitar  el login
const user  = true;
  
  return (
    <NavigationContainer>
      {user ? <TabNavegation/> : console.log("<AuthNavigation/>, login y signUp")}
         
  
    </NavigationContainer>

  );
}

export default MainNavigation