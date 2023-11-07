/* eslint-disable */
import React from 'react';
import {StyleSheet, FlatList, View, Text } from 'react-native';
import EventDayItem from './EventDayItem';





const CustomCalendarList = ({ items }) => {


    return (
        <View>
            <Text  styles={styles.container}>List of Events:</Text>
            <FlatList
                data={items}
                style={styles.flat}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                
                  <EventDayItem item={item} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

        borderColor: 'red',
        borderWidth: 5,



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
    }
})



export default CustomCalendarList;


