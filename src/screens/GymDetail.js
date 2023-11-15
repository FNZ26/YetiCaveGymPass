import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Rate from '../components/Rate';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header'
import { Colors } from '../theme/Colors';
import Line from '../components/Line';
import { useSelector } from 'react-redux';

const GymDetail = (props) => {
    const item = useSelector(state => state.gymSlice.gymPressed)
    return (
        <SafeAreaView style={styles.allContainer}>
            <Header title={item.nombre} />
            <View style={styles.infoContainer}>
                
                <Image
                    style={styles.banner}
                    source={require('../../assets/images/banner.png')}
                />
                <Text style={styles.title}>{item.nombre}</Text>
                <View style={styles.rateContainer}>
                    <Rate rate={item.rate} />
                    <Text >({item.rate})</Text>
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.textSt}>{item.descripcion}</Text>
                </View>
                <Line size='90%' />
                <View style={styles.scheduleContainer}>
                    <Text style={styles.textSt}>Horario: Lunes a Sabado </Text>
                    <Text style={styles.textSt}>{item.horario}</Text>
                </View>
                <Line size='90%' />
                <View style={styles.dataFixContainer}>
                    <Text style={styles.textSt}>{item.direccion}</Text>
                </View>
                <Line size='90%' />
                <View style={styles.dataFixContainer}>
                    <Text style={styles.textSt}>{item.servicios.join(", ")}</Text>
                    <Text style={styles.textSt}>{item.tarifas}</Text>
                </View>
                <Line size='90%' />
                <View style={styles.contactContainer}>
                    <Text style={styles.textContact}>{item.contacto.telefono}</Text>
                    <Text style={styles.textContact}>{item.contacto.email}</Text>
                    <Text style={styles.textContact}>{item.contacto.sitio_web}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default GymDetail

const styles = StyleSheet.create({
    allContainer: {
        backgroundColor: Colors.black,
        height: '100%',
        width: '100%',
    },
    infoContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    rateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontFamily: 'NunitoBold',
        color: Colors.white,
    },
    descContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    dataFixContainer: {
        width: '100%',
        justifyContent: 'center',
        padding: 10,
    },
    scheduleContainer: {
        flexDirection: 'row',
        width: '100%',
        padding: 10,
    },
    desc: {
        fontFamily: 'NunitoMedium',
        color: Colors.white,
    },
    scheduleText: {
        fontFamily: 'NunitoMedium',
        color: Colors.white,
    },
    textSt: {
        fontFamily: 'NunitoMedium',
        color: Colors.white,
    },
    textContact: {
        fontFamily: 'NunitoMedium',
        color: Colors.yellow,
    },
    contactContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    banner:{
        width: '100%',
        height: 120,
        backgroundColor: Colors.yellow
    }
})
