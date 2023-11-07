import { StatusBar } from 'expo-status-bar';

import { useFonts } from 'expo-font';
import MainNavigation from './src/navigation/MainNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

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
  //  
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>


  );
}


//ToDo para MVP:
/*

estetico:
-Agregar Imagenes donde corresponde (gym, logo login, perfil)
-Agregar estilos (varias partes de la app)
-Estilos de Agenda (bug?)


funcional:
-Configurar para que depende el tipo usuario, aparezca la parte de administracion (ideal ddesde la bbdd, sino con un codigo)
-Inicio de Sesion no redirige automaticamente al dar iniciar sesion
-cerrar sesion no redirige a login
-Agregar Modales (varias partes de la app)

-Del lado de administracion, solucionar problema que genera una direccion mas a la hora de guardar la data class>fecha>DATA(este no deberia ir)>clases
-Funciones de login (notificar errores (porque se  rechaza mail/contraseña, errores, etc) )




*/