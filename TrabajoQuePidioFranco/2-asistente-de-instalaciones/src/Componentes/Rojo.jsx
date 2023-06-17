import React from 'react';
import Estructura from './Estructura';

function Rojo() {
  return (
    <Estructura
    backgroundColor="red"
    titleColor="Rojo"
    title="Asistente de instalaciones"
    description="Un texto de ejemplo rápido para construir sobre el título de la tarjeta y componer la mayor parte del contenido de la tarjeta."
    infBoton= "Iniciar"
    ruta= "/color-verde"
    />
  );
}

export default Rojo;
