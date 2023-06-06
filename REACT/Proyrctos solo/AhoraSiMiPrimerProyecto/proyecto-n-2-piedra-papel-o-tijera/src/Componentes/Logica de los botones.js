import React, { useState } from 'react';
import Boton from './Boton';

function Juego({ setMostrarPiedra, setMostrarPapel, setMostrarTijera, setMostrarDorsoAleatorio }) {
  const reiniciarJuego = () => {
    setMostrarPiedra(true);
    setMostrarPapel(true);
    setMostrarTijera(true);
    setMostrarDorsoAleatorio(false);
  };

  const comenzarJuego = () => {
  };

  return (
    <div>
      <div>
        <Boton label="Reiniciar" onClick={reiniciarJuego} />
        <Boton label="Comenzar" onClick={comenzarJuego} />
      </div>
    </div>
  );
}

export default Juego;