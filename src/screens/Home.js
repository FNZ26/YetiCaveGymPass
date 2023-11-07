import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../theme/Colors'
import GymsList from '../components/GymsList'





const Home = (  props ) => {
// props: navigation



  return (
    <SafeAreaView style={styles.container}>

      <Header title='Inicio' />
        <GymsList navigation={props.navigation}/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    height: '100%',
    width: '100%',
   


  },

  //Box gym
  boxGym: {
    width: '100%',
    height: 150,
    borderColor: 'red',
    borderWidth: 5,
    padding: 6,
    flexDirection: 'row',

  },
  boxInfo:{

  },
  boxIcons:{

  }


})