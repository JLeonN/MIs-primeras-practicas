import React from 'react';
import Estructura from '../Estructura';

function Turquesa() {
  return (
    <Estructura
    backgroundColor="turquoise"
    titleColor="Turquesa"
    title="Asistente de instalaciones"
    description="Aceptar los términos y condiciones, 
    Marca la casilla para confirmar la aceptación de los términos y condiciones. ¡Listo para comenzar!"
    mostrarAceptar= "<Aceptar />"
    Casilla=" Aceptar los términos"
    infBoton= "Sigiente"
    mostrarBoton= "<botonCancelar />"
    ruta= "/color-amarillo"
    />
  );
}

export default Turquesa;
