import React, { useState } from 'react';
import Estructura from '../Estructura';

function Aceptar() {

  return (
    <div>
      <Estructura 
    backgroundColor="turquoise"
    titleColor="Turquesa"
    title="Asistente de instalaciones"
    description="Aceptar los términos y condiciones, 
    Marca la casilla para confirmar la aceptación de los términos y condiciones. ¡Listo para comenzar!"
    mostrarAceptar= {true}
    mostrarBoton= {true}
    Casilla=" Aceptar los términos"
    infBoton= "Sigiente"
    ruta= "/color-amarillo"
    />
    </div>
  );
}

export default Aceptar;
