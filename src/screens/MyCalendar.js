import { StyleSheet, Text, View, Button, Platform, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../theme/Colors'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux';
import { fetchClassData } from '../redux/slices/gymSlice';
import { Agenda } from 'react-native-calendars';
import CustomCalendarList from '../components/CustomCalendarList';
import { useGetClassQuery } from '../services/gymApi'
import { setClass } from '../redux/slices/gymSlice'; // Importa la acción setClass

const MyCalendar = () => {
  const today = new Date();
  const fechaActual = today.toISOString().split('T')[0];
  const [selectedDay, setSelectedDay] = useState(fechaActual);

  const datos = useSelector((state) => state.gymSlice.class);
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useGetClassQuery();
  console.log("data: ",data,"isLoading: ",isLoading,"isError: ",isError)
  useEffect(() => {
    if (data && !isLoading && !isError) {
      // Actualiza el estado con los datos de la API
      dispatch(setClass(data));
    }
  }, [data, isLoading, isError]);
  console.log("data solito: ",data)
  function onHandleDay(day) {
    setSelectedDay(day.dateString);
    console.log('day.datestring: ', day.dateString);
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
        items={datos}
        renderList={(listProps) => {
          const selectedEvents = listProps.items[selectedDay] || [];
          return <CustomCalendarList items={selectedEvents} />;
        }}
        hideKnob={false}
        theme={{
          calendarBackground: Colors.black,
          selectedDayBackgroundColor: Colors.yellow,
          selectedDayTextColor: Colors.white,
          dotColor: Colors.white,
          todayTextColor: '#00adf5',
          dayTextColor: Colors.white,
          textDisabledColor: '#adadad',
          textSectionTitleColor: '#ffffff',
          agendaKnobColor: Colors.yellow,
          agendaDayTextColor: 'yellow',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'blue',
        }}
        style={{
          backgroundColor: 'red',
        }}
      />
    </SafeAreaView>
  );
}

export default MyCalendar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    height: '100%',
    width: '100%',
  },
});
