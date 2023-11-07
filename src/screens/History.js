import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'

const History = (props) => {

    //flatlist con TODAS las compras realizadas (clase unica o mes)
    /*
    Tabla "Membresías":
    ID de membresía (clave primaria)
    ID de usuario (clave foránea que se relaciona con el ID de usuario en la tabla de Usuarios)
    Tipo de membresía (mensual, pase individual)
    Estado de la membresía (activa, inactiva, vencida)
    Fecha de inicio de membresía
    Fecha de vencimiento de membresía
    Historial de membresías anteriores
    */
    return (
        <SafeAreaView style={styles.allContainer}>
            <Header title="Historial de Compras" />
            <Text>History</Text>
        </SafeAreaView>
    )
}

export default History

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        height: '100%',
        width: '100%',



    },
})