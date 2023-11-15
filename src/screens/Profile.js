import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../theme/Colors'
import Header from '../components/Header'
import Line from '../components/Line'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { clearUser, setCurrentUser, setUser } from '../redux/slices/authSlice'

import { FontAwesome } from '@expo/vector-icons';

const Profile = (props) => {


  const dispatch = useDispatch();

  const user = useSelector(state => state.authSlice.user);

  const currentUser = useSelector(state => state.authSlice.currentUser);



  const onHandleLogout = async () => {
    try {
      console.log("Cerrar Sesion")
      dispatch(clearUser());
      await AsyncStorage.removeItem("userEmail");
      dispatch(setUser(null));
    } catch (error) {
      console.log("Error en LogOut: ", error)
    }
  }
  return (
    <SafeAreaView style={styles.allContainer}>
      <Header title='Perfil' />
      <View style={styles.topContainer}>
        <View style={styles.imageBox}>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.textSt}>Nombre: {currentUser.nombreCompleto}  #{currentUser.idUsuario}</Text>
          <Text style={styles.textSt}>Email: {currentUser.email}</Text>
          <Text style={styles.textSt}>Fecha Nacimiento: {currentUser.fechaNacimiento}</Text>
          <Text style={styles.textSt}>Telefono: {currentUser.numeroTelefono}</Text>
        </View>
      </View>
      <Line size='100%' />
      <View style={styles.bottomContainer}>


      <Pressable onPress={()=> props.navigation.navigate("history")}>
        <View style={styles.card}>
          <View style={styles.cardData}>
            <FontAwesome name="history" size={24} color={Colors.yellow} />
            <Text style={styles.textStCard}>Historial</Text>
          </View>
          <FontAwesome name="chevron-right" size={24} color={Colors.yellow} />
        </View>
        </Pressable>


        <View style={styles.card}>
          <View style={styles.cardData}>
            <FontAwesome name="id-card" size={24} color={Colors.yellow} />
            <Text style={styles.textStCard}>Certificado Pago</Text>
          </View>
          <FontAwesome name="chevron-right" size={24} color={Colors.yellow} />
        </View>


        <Line size='90%' />

        <Pressable onPress={onHandleLogout}><Text>Cerrar Sesion</Text></Pressable>
      </View>
    </SafeAreaView>
  )
};

export default Profile;

const styles = StyleSheet.create({
  allContainer: {
    backgroundColor: Colors.black,
    height: '100%',
    width: '100%',

  },
  topContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bottomContainer: {
    flexDirection: 'column',
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
  imageSt: {
    borderWidth: 3,
    borderColor: 'red',
    flex: 1,
  },
  imageBox: {
    width: '40%'
  },
  infoBox: {
    width: '60%',
    padding: 10,

  },
  textSt: {

    fontFamily: 'NunitoMedium',
    color: Colors.white,
    fontSize: 15,
  },
  textStCard: {
    fontFamily: 'NunitoMedium',
    color: Colors.black,
    fontSize: 18,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '90%',
    // Estilo para Android
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',

    // Estilo para iOS
    shadowColor: Colors.gray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardData: {
    width: '50%',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 25,
  },
  tinyLogo: {
    height: 120,
    width: 120,
    backgroundColor: Colors.yellow,
    borderRadius: 100,
    borderWidth: 1,
  }

});


/*
Información de Usuario:
ID de usuario (clave primaria).
Nombre de usuario.
Nombre completo.
Dirección de correo electrónico (utilizada para iniciar sesión y recibir notificaciones).
Contraseña (se debe almacenar de forma segura, como un hash).
Número de teléfono.
Género.
Fecha de nacimiento.
Foto de perfil.
Información de Membresía:
Tipo de membresía (por ejemplo, mensual, anual, pases individuales, etc.).
Estado de la membresía (activa, inactiva, vencida).
Fecha de inicio de membresía.
Fecha de vencimiento de membresía.
Historial de membresías anteriores.
Reservas:
ID de reserva (clave primaria).
ID de usuario (clave foránea).
ID de clase o equipo reservado (si es relevante).
Fecha y hora de la reserva.
Estado de la reserva (confirmada, pendiente, cancelada, completada, etc.).
Clases y Equipos:
ID de clase o equipo (clave primaria).
Nombre de la clase o equipo.
Descripción.
Instructor (si es relevante).
Horarios disponibles.
Capacidad máxima.
Duración de la clase.
Comentarios y Valoraciones:
Comentarios realizados por los usuarios.
Valoraciones de clases o instalaciones.
Historial de Actividad:
Registro de actividades del usuario, como reservas pasadas, cancelaciones, ingresos al gimnasio, etc.
Información de Pago:
Información sobre tarjetas de crédito o métodos de pago para el cobro de membresías y reservas.
Notificaciones y Preferencias:
Preferencias de notificación (por ejemplo, notificaciones por correo electrónico o mensajes push).
Registro de notificaciones enviadas.
Configuración de Privacidad:
Opciones de privacidad relacionadas con la visibilidad del perfil y la información del usuario.
Seguridad y Registro de Acceso:
Registro de intentos de inicio de sesión, incluyendo direcciones IP y fechas y horas.
Asegúrate de diseñar la base de datos de acuerdo a las necesidades específicas de tu aplicación y considera aspectos de seguridad, como el cifrado de contraseñas y la protección de datos personales de los usuarios, para cumplir con las regulaciones de privacidad y seguridad de datos.


    //tabla usuario
  
    Tabla "Usuarios":
    
    ID de usuario (clave primaria)
    Nombre completo
    Dirección de correo electrónico
    Número de teléfono
    genero
    Fecha de nacimiento
    Foto de perfil
 
















*/