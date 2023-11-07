import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'

const Line = ({ size = '100%' }) => {

    // recibe el tamaño de la linea en %
    return (
        <View style={styles.lineContainer} >
            <View style={[styles.line, { width: size }]} />
        </View>
    )
}

export default Line

const styles = StyleSheet.create({
    line: {
        backgroundColor: Colors.green,
        height: 4,
        marginTop: 10,
        borderRadius: 100,
    },
    lineContainer: {
        width: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',

    }
})