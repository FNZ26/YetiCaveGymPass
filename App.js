import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import MainNavigation from './src/navegation/MainNavegation';



export default function App() {



  const [fontLoaded] = useFonts({
    NunitoBlack: require("./assets/fonts/Nunito-Black.ttf"),
    NunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
    NunitoMedium: require("./assets/fonts/Nunito-Medium.ttf"),
    NunitoRegular: require("./assets/fonts/Nunito-Regular.ttf"),
    NunitoLight: require("./assets/fonts/Nunito-Light.ttf"),

  });

  if (!fontLoaded) {
    return;
  }
  //    <StatusBar style="auto" />
  return (

      <MainNavigation/>

  

  );
}

const styles = StyleSheet.create({

});
