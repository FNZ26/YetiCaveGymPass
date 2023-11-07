import { useSelector, useDispatch } from 'react-redux';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import GymItem from './GymItem';
import { fetchGymsData } from '../redux/slices/gymSlice';
import React from 'react'; // Importa useEffect desde React

const GymsList = (props) => {
    tabGyms = useSelector((state) => state.gymSlice.allGyms);
    const dispatch = useDispatch();

    // Cuando el componente se monta, cargamos los datos de la API

    dispatch(fetchGymsData());


    return (
        <View>
            <FlatList
                data={tabGyms}
                keyExtractor={(item) => item.name} // Asegúrate de usar un campo único como clave

                renderItem={({ item }) => <GymItem navigation={props.navigation} item={item} />}
            />
        </View>
    );
};

export default GymsList;
