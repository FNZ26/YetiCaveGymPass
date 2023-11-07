import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../theme/Colors';

const Rate = ({ rate }) => {
    const stars = [];

    const yellow = Colors.yellow

    for (let i = 0; i < 5; i++) {
        if (rate >= i + 1) {
            stars.push(
                <Icon name="star" size={15} color={yellow} key={i} />
            );
        } else if (rate > i) {
            stars.push(
                <Icon name="star-half-full" size={15} color={yellow} key={i} />
            );
        } else {
            stars.push(
                <Icon name="star-o" size={15} color={yellow} key={i} />
            );
        }
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            {stars}
        </View>
    );
};

export default Rate

const styles = StyleSheet.create({})