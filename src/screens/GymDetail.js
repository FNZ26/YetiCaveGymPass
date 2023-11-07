import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Rate from '../components/Rate';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header'
import { Colors } from '../theme/Colors';
import Line from '../components/Line';
import { useSelector } from 'react-redux';

const GymDetail = (props) => {


   const  item  = useSelector(state => state.gymSlice.gymPressed)

    //const { item } = props.route.params;
    console.log('Item en GymDetail: ',  useSelector(state => state.gymSlice.gymPressed));


    return (
        <SafeAreaView style={styles.allContainer}>
            <Header title={item.nombre} />

            <View style={styles.screenContainer}>


                <Text>{item.nombre}</Text>

                <View style={styles.rateContainer}>
                    <Rate rate={item.rate} />
                    <Text>({item.rate})</Text>
                </View>

                <Text>{item.descripcion}</Text>

                <Line size='90%' />

                <View style={styles.schedule}>
                    <Text>Horario: Lunes a Sabado </Text>
                    <Text>{item.horario}</Text>
                </View>

                <Line size='90%' />

                <Text>{item.direccion}</Text>
                <Text>lati</Text>
                <Text>{item.ubicacion.latitud}</Text>
                <Text>longi</Text>
                <Text>{item.ubicacion.longitud}</Text>

                <Line size='90%' />


                <Text>{item.servicios.join(", ")}</Text>
                <Text>{item.tarifas}</Text>

                <Line size='90%' />

                <Text>{item.contacto.telefono}</Text>
                <Text>{item.contacto.email}</Text>
                <Text>{item.contacto.sitio_web}</Text>


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
    screenContainer: {
        padding: 10,
    },
    rateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
        alignItems: 'center',
    },
    schedule: {
        flexDirection: 'row',
        alignItems: 'center',
    }


})