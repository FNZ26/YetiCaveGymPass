import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'

const Header = ({ title = "Home"}) => {

  return (
    <View style={styles.container}>
      
      <Text style={styles.titleStyle}>{title}</Text>
      <View style={styles.line} />

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
   
   
    backgroundColor: Colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderColor: Colors.green,
    borderBottomWidth: 5,


  },
  titleStyle: {
    fontSize: 25,
    
    fontWeight: '600',
    color: Colors.white,
    fontFamily: 'NunitoBold',
    borderColor: Colors.yellow,

   
  },
  line: {
    backgroundColor: Colors.yellow, 
    height: 5,
    width: '100%',
    marginTop: 10, 
    
  },
 

})