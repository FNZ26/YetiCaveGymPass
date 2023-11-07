import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../theme/Colors'
import Header from '../components/Header'

const Admin = (props) => {
  return (
    <SafeAreaView style={styles.allContainer}>
      <Header title="administracion"/>
      <TouchableOpacity onPress={()=>props.navigation.navigate("addClass")}>
        <Text>Agregar Clase:</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Admin

const styles = StyleSheet.create({
  allContainer: {
    backgroundColor: Colors.black,
    height: '100%',
    width: '100%',
},
})