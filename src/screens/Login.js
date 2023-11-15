import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../theme/Colors'
import { TouchableOpacity } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { firebase_auth } from '../firebase/firebase_auth';
import { useDispatch } from 'react-redux'
import { setIdToken, setUser } from '../redux/slices/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const dispatch = useDispatch();

    const onHandleLogin = async () => {

        try {
            const response = await signInWithEmailAndPassword(firebase_auth, email, password);
            //console.log(response);
            AsyncStorage.setItem("userEmail", response.user.email);

            dispatch(setUser(response.user.email));
            dispatch(setIdToken(response._tokenResponse.idToken));
        } catch (e) {
            console.log("error login:", e);
        }
        //console.log("userName: ", email);
        //console.log("passsword: ", password);
    };

    return (
        <SafeAreaView style={styles.container}>

            <Image
                style={styles.tinyLogo}
                source={require('../../assets/images/logo.png')}
            />
            <Text style={styles.title}>Yeti Cave Gym Pass</Text>

            <TextInput
                placeholder='Email'
                style={styles.textInput}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Contraseña"
                secureTextEntry
                style={styles.textInput}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity style={styles.button} onPress={() => onHandleLogin()}>
                <Text >Iniciar Sesion</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.black,
        height: '100%',


    },
    title: {
        fontSize: 25,
        marginBottom: 20,
        marginVertical: 10,
        borderBottomWidth: 2,
     borderColor: Colors.yellow,
        fontFamily: 'NunitoMedium',
        color: Colors.white,


    },
    textInput: {
        width: "85%",
        height: 50,
        borderColor: Colors.yellow,
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 17,
    },
    button: {
        borderColor: Colors.yellow,
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: Colors.white,

    },
    buttonText: {
        color: "white",
        fonstSize: 16,
    },
    finalText: {
        fontSize: 20,

        marginHorizontal: 5,

    },
    loginText: {
        fontSize: 20,

        marginHorizontal: 5,
        color: Colors.yellow,
        borderBottomWidth: 2,
        borderColor: Colors.yellow,

    },
    Pressable: {
        fontSize: 22,

        color: 'blue',
        marginHorizontal: 5,
    },
    finalContainer: {

        alignContent: 'center',
        flexDirection: 'row',
    },
    tinyLogo: {
        height: 200,
        width: 200,
        backgroundColor: Colors.yellow,
        borderRadius: 100,
        borderWidth: 1,
        marginBottom: 100,
    },

})