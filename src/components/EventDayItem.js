import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Colors } from '../theme/Colors';

const EventDayItem = ({ item }) => {
   

    return (
        <View styles={styles.container}>
            <View>
                <Text styles={styles.text}>{item.name}</Text>
                <Text styles={styles.text}>{`${item.startTime} - ${item.endTime}`}</Text>
            </View>
            <View style={styles.icons}>
                <TouchableOpacity style={styles.button} onPress={() => console.log('Lanzar Modal')}>
                    <FontAwesome name="building" size={24} color="black" />

                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => console.log('Lanzar modal')}>
                    <FontAwesome name="play" size={24} color="black" />

                </TouchableOpacity>
                <View style={styles.line} />
            </View>

        </View>
    )
}

export default EventDayItem

const styles = StyleSheet.create({
    container: {

        borderColor: 'red',
        borderWidth: 5,
        flexDirection: 'row',
    },
    text: {
        borderColor: 'red',
        borderWidth: 5,
    },
    AgendaStyle: {
        backgroundColor: 'red',
    },
    flat: {
        borderColor: 'green',
        borderWidth: 5,
    },
    icons: {
        flexDirection: 'row',
    },
    backgroundColor: Colors.green,
    height: 5,
    width: '100%',
    marginTop: 10, 
})