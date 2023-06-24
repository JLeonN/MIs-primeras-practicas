import React from 'react';
import Estructura from '../Estructura';

function Amarillo() {
  return (
    <Estructura
    backgroundColor="yellow"
    titleColor="Amarillo"
    title="Asistente de instalaciones"
    mostrarColapsar= {true}
    mostrarBoton= {true}
    infBoton= "Sigiente"
    ruta= "/color-Negro"
    />
  );
}

export default Amarillo;
