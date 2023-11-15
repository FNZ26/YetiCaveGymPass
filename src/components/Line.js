import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'

const Line = ({ size = '100%',  colorCustom = Colors.green }) => {
    // recibe el tamaño de la linea en %
    return (
        <View style={styles.lineContainer} >
            <View style={[styles.line, { width: size }, {backgroundColor: colorCustom}]} />
        </View>
    )
}

export default Line

const styles = StyleSheet.create({
    line: {
        height: 3,
        borderRadius: 100,
    },
    lineContainer: {
        width: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent:  'center',
    }
})