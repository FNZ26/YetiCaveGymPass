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
- Estilo y Texto en el calendario, quitar boton de gym, es innecesario
-  en perfil terminar de hacer el estilo
-El flatList de gyms queda tapado por el tabnav

funcional:

-Agregar Modales (varias partes de la app)
 -Cerrar Sesion
 -subscribir  clase en ddbb

 
-Del lado de administracion, solucionar problema que genera una direccion mas a la hora de guardar la data class>fecha>DATA(este no deberia ir)>clases
-Funciones de login (notificar errores (porque se  rechaza mail/contraseña, errores, etc) )
-Perfil: boton historial e inventar certificado pago (tendria que ser carnet membresia actual o algo asi)
-Perfil: imagen perfil
-Administracion: usar el Card y sumar funciones de administrador (solo estetico, no es necesario para aprobar)

*/