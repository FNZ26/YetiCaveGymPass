import { createSlice } from "@reduxjs/toolkit";

import { useGetClassQuery, useGetGymListQuery } from "../../services/gymApi";





// HowTo:Para usar la data desde la api:
//() una vez que desde la api esta bien configurado
//initial state "vacio"
//en reducer generar un setLoNecesites
//generar una  funcion async que traiga la data de la api
//llamar la funcion en el componente que se necesite (con dispatch  y useEffect)
const gymSlice = createSlice({
    name: "gyms",
    initialState: {
        allGyms: [],
        gymPressed: [],
        class: [],
        test: [],
    },
    reducers: {
        setGymPressed: (state, action) => {
            state.gymPressed = action.payload;
        },
        setAllGyms: (state, action) => {
            state.allGyms = action.payload;
        },
        setClass: (state, action) => {
            state.class = action.payload;
        },
       
    },
})

//se exportan los reducers
export const { setGymPressed, setAllGyms, setClass} = gymSlice.actions;

export default gymSlice.reducer;


export const fetchGymsData = () => async (dispatch) => {
    //console.log("dentro de fetchGymData: ",useGetGymListQuery())
    const response = await useGetGymListQuery(); // Realiza la consulta a la API
    dispatch(setAllGyms(response.data)); // Actualiza el estado con los datos recibidos
}

export const fetchClassData = () => async (dispatch) => {
    console.log("dentro de FetchClassData: ",useGetClassQuery())
    const response = await useGetClassQuery(); // Realiza la consulta a la API
    dispatch(setClass(response.data)); // Actualiza el estado con los datos recibidos
}

//HowTo: usar  el setGymPressed
//dentro del componente o screen se importa el reducer y dispatch
/*

//se usa el useDIspatch() en una cnst  que  vamos a estar usando
const dispatch  = useDispatch();

  const unaFuncion = () => {


    dentro de una funcion o donde  se necesite, se utiliza:
    dispatch(setGymPressed(item));

    // se navega  hacia la pag deseada
    props.navigation.navigate("gymDetail")

}
*/