import { StyleSheet, Text, View, Button, Platform, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../theme/Colors'
import Header from '../components/Header'





//Calendar 

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import CustomList from '../components/CustomList';


const MyCalendar = () => {


  /*
  Nota Consulta COderHouse:
  
  mi duda es como modificar el style de la parte donde renderiza los eventos del dia en la  agenda, por alguna razon cambio las cosas  pero no se ve aplicado en la app
  
  
  

  
  */



  // calendar




  // probar renderizar ahi mismo  en agenda las  cosas con render, en vez de customList



  const today = new Date();
  const fechaActual = today.toISOString().split('T')[0];
  const [selectedDay, setSelectedDay] = useState(fechaActual)


  const events = {
    "2023-10-26": [
      {
        "name": "Evento 1",
        "startTime": "10:00 AM",
        "endTime": "11:00 AM"
      },
      {
        "name": "Evento 2",
        "startTime": "11:00 AM",
        "endTime": "12:00 PM"
      },
      {
        "name": "Evento 3",
        "startTime": "12:00 PM",
        "endTime": "01:00 PM"
      },
      {
        "name": "Evento 4",
        "startTime": "01:00 PM",
        "endTime": "02:00 PM"
      },
      {
        "name": "Evento 5",
        "startTime": "02:00 PM",
        "endTime": "03:00 PM"
      },
      {
        "name": "Evento 6",
        "startTime": "03:00 PM",
        "endTime": "04:00 PM"
      }
    ],
    "2023-10-25": [
      {
        "name": "Evento 2",
        "startTime": "2:00 PM",
        "endTime": "3:00 PM"
      },
      {
        "name": "Evento 4",
        "startTime": "01:00 PM",
        "endTime": "02:00 PM"
      },
      {
        "name": "Evento 5",
        "startTime": "02:00 PM",
        "endTime": "03:00 PM"
      },
      {
        "name": "Evento 6",
        "startTime": "03:00 PM",
        "endTime": "04:00 PM"
      }
    ]
  };

  function onHandleDay(day) {

    // setSelectedDay(day.dateString);
    console.log('day.datestring: ', day.dateString)
    setSelectedDay(day.dateString)

  }




  return (
    <SafeAreaView style={styles.container}>
      <Header title='Agenda' />

      <Agenda

        minDate={fechaActual}
        pastScrollRange={1}
        futureScrollRange={3}

        onDayPress={day => {
          onHandleDay(day);
        }}

        items={events}





        renderList={(listProps) => {
          const selectedEvents = listProps.items[selectedDay] || [];
          return <CustomList items={selectedEvents} />;
        }}

        hideKnob={false}

        theme={{

          // Modifica los estilos de la Agenda aquí
          //funcionan
          calendarBackground: Colors.black,
          selectedDayBackgroundColor: Colors.yellow,
          selectedDayTextColor: Colors.white,
          dotColor: Colors.white,
          todayTextColor: '#00adf5',
          dayTextColor: Colors.white,
          textDisabledColor: '#adadad',

          textSectionTitleColor: '#ffffff',
          agendaKnobColor: Colors.yellow,
          // no funcionan
          backgroundColor: 'red',



          // modifica los estilos dentro del contenedor de agenda, pero no la data en si
          agendaDayTextColor: 'yellow',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'blue',

        }}

        style={{
          backgroundColor: 'red'
        }}

      />

    </SafeAreaView>
  )


}



export default MyCalendar

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    height: '100%',
    width: '100%',


  },
  AgendaStyle: {
    backgroundColor: 'red',
  }
})

