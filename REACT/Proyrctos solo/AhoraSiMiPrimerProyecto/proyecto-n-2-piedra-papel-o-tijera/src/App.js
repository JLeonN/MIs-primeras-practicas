import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Inicio from '../src/Componentes/Inicio';
import Dorso from './Componentes/Dorso';
import Manos from './Componentes/Manos';
import DorsoAleatorio from './Componentes/CartaAleatoria';
import Resultado from './Componentes/Resultado'
import Juego from './Componentes/Logica de los botones';
import Boton from './Componentes/Boton';


function App() {
  const [mostrarPiedra, setMostrarPiedra] = useState(true);
  const [mostrarPapel, setMostrarPapel] = useState(true);
  const [mostrarTijera, setMostrarTijera] = useState(true);
  const [mostrarDorsoAleatorio, setMostrarDorsoAleatorio] = useState(false);

  const handleClicPiedra = () => {
    setMostrarPiedra(true);
    setMostrarPapel(false);
    setMostrarTijera(false);
    setMostrarDorsoAleatorio(true);
  };

  const handleClicPapel = () => {
    setMostrarPiedra(false);
    setMostrarPapel(true);
    setMostrarTijera(false);
    setMostrarDorsoAleatorio(true);
  };

  const handleClicTijera = () => {
    setMostrarPiedra(false);
    setMostrarPapel(false);
    setMostrarTijera(true);
    setMostrarDorsoAleatorio(true);
  };

  const reiniciarJuego = () => {
    setMostrarPiedra(true);
    setMostrarPapel(true);
    setMostrarTijera(true);
    setMostrarDorsoAleatorio(false);
  };

  return (
    <div className='vh-100'>
      <h1 className='col-12 text-center'>Piedra, papel o tijera</h1>
      <div className='row d-flex'>
        {mostrarDorsoAleatorio ? (
          <div className='card dorso-wrapper text-center'>
            <DorsoAleatorio className='dorso' />
          </div>
        ) : (
          <img
            src={Dorso[0].cartaEnDorso}
            className='img-fluid dorso'
            alt='Dorso de carta'
          />
        )}
      </div>

      {/* Cartas */}
      <div className='d-flex'>
        {/* Piedra */}
        {mostrarPiedra && (
          <img
            src={Manos[0].piedra}
            className='img-fluid dorso'
            alt='Piedra'
            onClick={handleClicPiedra}
          />
        )}

        {/* Papel */}
        {mostrarPapel && (
          <img
            src={Manos[1].papel}
            className='img-fluid dorso'
            alt='Papel'
            onClick={handleClicPapel}
          />
        )}

        {/* Tijera */}
        {mostrarTijera && (
          <img
            src={Manos[2].tijera}
            className='img-fluid dorso'
            alt='Tijera'
            onClick={handleClicTijera}
          />
        )}
      </div>
        {/* Boton reiniciar juego */}
      <div>
        <Juego 
          reiniciarJuego={reiniciarJuego}
          setMostrarPiedra={setMostrarPiedra}
          setMostrarPapel={setMostrarPapel}
          setMostrarTijera={setMostrarTijera}
          setMostrarDorsoAleatorio={setMostrarDorsoAleatorio}>
          <Boton label="Reiniciar" onClick={reiniciarJuego} />
        </Juego>
      </div>
    </div>
  );
}

export default App;
