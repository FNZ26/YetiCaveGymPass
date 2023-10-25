import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../theme/Colors'





const Home = () => {



  // En Home, van la  info de cada GYM disponible (YetiGym San Isidro, tigre, etc)
  return (
    <SafeAreaView style={styles.container}>

      <Header title='Home' />

      <View>
        <View style={styles.boxGym}>
          <View style={styles.boxInfo}>
            <Text>Yeti Gym Tigre</Text>
            <Text>Boulevard San Martin 251</Text>
            <Text>Lunes a Sabado, 9 a 21 hs</Text>
            <Text>Rate: 4.23</Text>
          </View>
          <View style={styles.boxIcons}>
            <Text>Icono1 -- Icono 2</Text>
          </View>
        </View>



        <View style={styles.boxGym}>
          <Text>Yeti Gym Tigre</Text>
          <Text>Boulevard San Martin 251</Text>
          <Text>Lunes a Sabado, 9 a 21 hs</Text>
          <Text>Rate: 4.23</Text>
        </View>
        <View style={styles.boxGym}>
          <Text>Yeti Gym Tigre</Text>
          <Text>Boulevard San Martin 251</Text>
          <Text>Lunes a Sabado, 9 a 21 hs</Text>
          <Text>Rate: 4.23</Text>
        </View>
        <View style={styles.boxGym}>
          <Text>Yeti Gym Tigre</Text>
          <Text>Boulevard San Martin 251</Text>
          <Text>Lunes a Sabado, 9 a 21 hs</Text>
          <Text>Rate: 4.23</Text>
        </View>


      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    height: '100%',
    width: '100%',
    borderWidth: 5,
    borderColor: 'blue',



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