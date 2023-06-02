import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Inicio from '../src/Componentes/Inicio';
import Dorso from './Componentes/Dorso';
import Manos from './Componentes/Manos';
import DorsoAleatorio from './Componentes/CartaAleatoria';

function App() {
  const [mostrarPiedra, setMostrarPiedra] = useState(true);
  const [mostrarPapel, setMostrarPapel] = useState(true);
  const [mostrarTijera, setMostrarTijera] = useState(true);
  const [mostrarDorsoAleatorio, setMostrarDorsoAleatorio] = useState(false);

  const handleClicPiedra = () => {
    setMostrarPiedra(true);
    setMostrarPapel(false);
    setMostrarTijera(false);
    setMostrarDorsoAleatorio(false);
  };

  const handleClicPapel = () => {
    setMostrarPiedra(false);
    setMostrarPapel(true);
    setMostrarTijera(false);
    setMostrarDorsoAleatorio(false);
  };

  const handleClicTijera = () => {
    setMostrarPiedra(false);
    setMostrarPapel(false);
    setMostrarTijera(true);
    setMostrarDorsoAleatorio(false);
  };

  const handleMostrarDorsoAleatorio = () => {
    setMostrarDorsoAleatorio(true);
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
          <>
            <h2 className='dorsocss text-center display-1'>{Dorso[0].title}</h2>
            <img
              src={Dorso[0].cartaEnDorso}
              className='img-fluid dorso'
              alt='Dorso de carta'
            />
          </>
        )}
      </div>
      <div className='d-flex'>
        {mostrarPiedra && (
          <>
            <h2 className='dorsocss text-center display-1'>{Manos[0].title}</h2>
            <img src={Manos[0].piedra}
              className='img-fluid dorso' alt='Piedra'
              onClick={handleClicPiedra}/>
          </>
        )}

        {mostrarPapel && (
          <>
            <h2 className='dorsocss text-center display-1'>{Manos[1].title}</h2>
            <img src={Manos[1].papel}
              className='img-fluid dorso' alt='Papel'
              onClick={handleClicPapel}/>
          </>
        )}

        {mostrarTijera && (
          <>
            <h2 className='dorsocss text-center display-1'>{Manos[2].title}</h2>
            <img src={Manos[2].tijera}
              className='img-fluid dorso' alt='Tijera'
              onClick={handleClicTijera}/>
          </>
        )}
      </div>
      <div>
        {!mostrarDorsoAleatorio && (
          <button onClick={handleMostrarDorsoAleatorio}>
            Mostrar Carta Dorso Aleatoria
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
