import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'
import Rate from './Rate'
import { useDispatch } from 'react-redux'
import { setGymPressed } from '../redux/slices/gymSlice'

const GymItem = (props) => {
  // recibe item de gym completo y el navigation



  // <Text style={styles.rateSt}>{props.item.rate}</Text>
  // ToDo:
  // sumar img de bbdd

  /*
 <Image
   style={styles.tinyLogo}
   source={{
     uri: './',
   }}
 />
 */


  //const logoImage = require('../assets/images/logo.png');
  //  <Image source={logoImage} style={styles.logo} />



  //console.log('prop: ', props.item)

  const item = props.item;
  const dispatch = useDispatch();

  const onHandleItem = () => {

    dispatch(setGymPressed(item));
    props.navigation.navigate("gymDetail", { item })

  }
  return (

    <TouchableOpacity onPress={() => onHandleItem()}>
      <View style={styles.boxGym} >

        <View style={styles.boxTop}>
          <Text style={styles.title}>{props.item.nombre} </Text>
          <Image 
            style={styles.tinyLogo}
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <View style={styles.boxBot}>
          <View style={styles.boxData} >
            <Text style={styles.schedule}>{props.item.horario}</Text>
            <Text style={styles.address}>{props.item.direccion}</Text>
          </View>
          <View style={styles.boxRate} >
            <Rate rate={props.item.rate} />
          </View>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default GymItem

const styles = StyleSheet.create({

  boxGym: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'space-between',
    height: 150,
    borderColor: Colors.green,
    borderBottomWidth: 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25
  },
  boxTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  boxBot: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  boxData: {
    justifyContent: 'flex-end',
  },
  boxRate: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'NunitoBold',
    color: Colors.white,
    fontSize: 23,
  },
  schedule: {
    color: Colors.yellow,
  },
  address: {
    color: Colors.gray,
  },
  image: {
    borderRadius: 100,
    alignSelf: 'flex-start',
  },
  tinyLogo: {
    height: 90,
    width: 90,
    backgroundColor: Colors.yellow,
    borderRadius: 100,
    borderWidth: 1,
  }
})