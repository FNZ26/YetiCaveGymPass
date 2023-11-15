import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../theme/Colors'
import Header from '../components/Header'


/*
<TouchableOpacity onPress={()=>props.navigation.navigate("addClass")}>
        <Text>Agregar Clase:</Text>
        <View style={styles.card}></View>
      </TouchableOpacity>
*/
const Admin = (props) => {
  return (
    <SafeAreaView style={styles.allContainer}>
      <Header title="administracion" />
      <View style={styles.buttonsContainer}>
        <View style={styles.card}>
          <Text>Sumar Clase</Text>
        </View>
        <View style={styles.card}>
          <Text>Modificar/Eliminar Clase</Text>
        </View>
        <View style={styles.card}>
          <Text>Agregar Nuevo Usuario</Text>
        </View>
        <View style={styles.card}>
          <Text>Modificar/Eliminar Usuario</Text>
        </View>
        <View style={styles.card}>
          <Text>Agregar Nuevo Gym</Text>
        </View>
        <View style={styles.card}>
          <Text>Eliminar Gym</Text>
        </View>
        <View style={styles.card}>
          <Text>Modificar Datos Gym</Text>
        </View>


      </View>
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
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '90%',
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.gray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardData: {
    width: '50%',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 25,
  },
})