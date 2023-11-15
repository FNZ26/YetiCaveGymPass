import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../theme/Colors';

import { useState } from 'react';
import Line from './Line';

const EventDayItem = ({ item }) => {
    const [modalAsingClassVisible, setModalAsingClassVisible] = useState(false);


    console.log(item)
    const asignClass = () => {
        setModalAsingClassVisible(true);
        console.log("modal")
    }
    const confirmClass = () => {
        setModalAsingClassVisible(!modalAsingClassVisible)
        Alert.alert('Te anotaste correctamente!');
    }

    return (

        <View styles={styles.allContainer}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalAsingClassVisible}
                onRequestClose={() => {
                    //Alert.alert('seleccion Cancelada');
                    setModalAsingClassVisible(!modalAsingClassVisible);
                }}>


                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Seguro/a que desea anotarse a esta clase?</Text>
                        <View style={styles.buttonContainer}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}

                                onPress={() => setModalAsingClassVisible(!modalAsingClassVisible)}>
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={confirmClass}>
                                <Text style={styles.textStyle}>Aceptar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.container}>


                <View style={styles.info}>

                    <Text styles={styles.text}>Gym:  {item.gymName}</Text>
                    <Text styles={styles.text}>Clase:  {item.className}</Text>
                    <Text styles={styles.text}>Disponibilidad:  {item.limit}</Text>
                    <Text styles={styles.text}>Horario:   {`${item.startTime} - ${item.endTime}`}</Text>

                </View>

                <View style={styles.icons}>
                    <TouchableOpacity style={styles.buttonIcons} onPress={asignClass}>
                        <FontAwesome name="play" size={24} color={Colors.white} />

                    </TouchableOpacity>
                    <View style={styles.line} />
                </View>


            </View>


            <Line size='90%' />
        </View>

    )
}

export default EventDayItem

const styles = StyleSheet.create({
    allContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.black
    },
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.black
    },
    text: {
        fontFamily: 'NunitoMedium',
        color: Colors.white,
        fontSize: 15,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.white,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        borderWidth: 3,
        borderColor: Colors.yellow,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    buttonIcons: {
        borderRadius: 20,
        padding: 10,
        borderWidth: 3,
        borderColor: Colors.yellow,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    info: {
        padding: 10,
        width: '60%',

    }

})