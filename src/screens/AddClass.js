import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAddClassMutation } from '../services/gymApi';

const AddClass = () => {
  const [addClass, result] = useAddClassMutation();

  const handleAgregarClase = async () => {
    const nuevaClase = {
      classname: "Clase de Prueba",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
      gymName: "Gym de Prueba",
      limit: 20,
      enrolledStudents: {},
    };

    // Fecha hardcodeada (año/mes/día)
    const fechaHardcodeada = "2023-11-07"; // ToDo: Calcular fecha (se seleccionaria)
    const numeroClase = Math.floor(Math.random() * 100) + 1; // ToDo: Calcular numero de clase

    try {
      // Llama a la mutación para agregar la clase en la ruta deseada
      const data = await addClass({ fecha: fechaHardcodeada, numeroClase, nuevaClase });
      console.log("Resultado de la mutación:", data);
      console.log("Resultado de la Nueva Clase:", nuevaClase);

      // Aquí puedes continuar con el código después de que se complete la mutación
    } catch (error) {
      console.error("Error al agregar la clase:", error);
      // Maneja el error de acuerdo a tus necesidades
    }
  };

  return (
    <View>
      <Text>Agregar Nueva Clase (Hardcodeado)</Text>
      <Button title="Agregar Clase" onPress={handleAgregarClase} />
    </View>
  );
};

export default AddClass;
