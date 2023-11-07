import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../theme/Colors'
import Header from '../components/Header'
import Line from '../components/Line'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { clearUser, setUser } from '../redux/slices/authSlice'

const Profile = () => {

    const dispatch = useDispatch();

    const onHandleLogout = async () => {
        try{
            dispatch(clearUser());
            await AsyncStorage.removeItem("userEmail");
            dispatch(setUser(null));
            console.log("entro")
        }catch (e){
            console.log(e)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title='Perfil' />
            <View style={styles.topContainer}>
                <View>
                    <Text>Imagen</Text>
                </View>
                <View>
                    <Text>ID usuario</Text>
                    <Text>Nombre de usuario</Text>
                    <Text>nombre completo</Text>
                    <Text>mail</Text>
                    <Text>telefono</Text>
                    <Text>fecha nacimiento</Text>
                </View>
            </View>
            <Line size='98%' />

            <View>
                <Text>info</Text>
                <Line size='90%' />
                <Text>info</Text>
                <Line size='90%' />
                <Text>info</Text>
                <Line size='90%' />
                <Text>info</Text>
                <Line size='90%' />
                <Pressable onPress={onHandleLogout}><Text>Cerrar Sesion</Text></Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        height: '100%',
        width: '100%',
    },
    topContainer: {
        flexDirection: 'row',
        width: '100%',

    }
})

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
    Nombre de usuario
    Nombre completo
    Dirección de correo electrónico
    Contraseña (almacenada de forma segura, como un hash)
    Número de teléfono
    genero
    Fecha de nacimiento
    Foto de perfil
 
















*/