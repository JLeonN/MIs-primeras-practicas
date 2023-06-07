import React, { useState } from 'react';
import Boton from './Boton';

function Juego({ reiniciarJuego }) {

  const comenzarJuego = () => {
  };

  return (
    <div>
      <div>
        <Boton label="Reiniciar" onClick={reiniciarJuego} />
      </div>
    </div>
  );
}

export default Juego;