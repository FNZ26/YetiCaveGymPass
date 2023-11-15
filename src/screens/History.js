import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../theme/Colors'
import Header from '../components/Header'
import Line from '../components/Line'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { clearUser, setCurrentUser, setUser } from '../redux/slices/authSlice'

import { FontAwesome } from '@expo/vector-icons';
import { useGetPayHistoryQuery } from '../services/gymApi'



const History = (props) => {

    const { data: payHistory, error, isLoading } =useGetPayHistoryQuery();

    const dispatch = useDispatch();

    console.log(payHistory)

 /*
    useEffect(() => {
        console.log("entro al useEffect")
        const getUserData = async () => {
            try {
                if (!isLoading && payHistory) {
                    const userEmail = await AsyncStorage.getItem("userEmail");
                    const foundPayHistory = userData?.find((usuario) => usuario.email === userEmail);
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
    }, [isLoading, payHistory, dispatch]);
    //flatlist con TODAS las compras realizadas (clase unica o mes)
    */
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

    const currentUser = useSelector(state => state.authSlice.currentUser);

    console.log(currentUser)



    return (
        <SafeAreaView style={styles.allContainer}>
            <Header title="Historial de Compras" />
           
        </SafeAreaView>
    )
}

export default History

const styles = StyleSheet.create({
    allContainer: {
        backgroundColor: Colors.black,
        height: '100%',
        width: '100%',
    
      },
     
})