import React from 'react';
import Estructura from '../Estructura';
import Colapsar from '../Colapsar';

function Amarillo() {
  return (
    <Estructura
    backgroundColor="yellow"
    titleColor="Amarillo"
    title="Asistente de instalaciones"
    mostrarColapsar= "<Colapsar />"
    mostrarBoton= "<botonCancelar />"
    infBoton= "Sigiente"
    ruta= "/color-Negro"
    />
  );
}

export default Amarillo;
