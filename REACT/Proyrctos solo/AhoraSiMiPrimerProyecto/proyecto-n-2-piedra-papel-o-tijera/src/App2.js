import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Inicio from '../src/Componentes/Inicio';
import Dorso from './Componentes/Dorso';
import Manos from './Componentes/Manos';
import DorsoAleatorio from './Componentes/CartaAleatoria';
import Resultado from './Componentes/Resultado'
import Juego from './Componentes/Juego';
import Boton from './Componentes/Boton';


function Contenedor() {
  const [paso, setPaso] = useState(1);

  const siguente = () => {
    setPaso(paso++)
  }

  return (
    <div class="row">

      {paso == 1 && (<Primero />)}

      {paso == 2 && (<Segundo />)}

      {paso == 3 && (<Tercero />)}

      {paso >= 4 && (<Fin />)}

      {paso < 4 && (
        <button className="btn btn-primary"
          type="button"
          onClick={siguente}>Siguente
        </button>
      )}
    </div>
  );
}

function Primero() {
  return (
    <h1>Primero</h1>
  );
}

function Segundo() {
  return (
    <h1>Segundo</h1>
  );
}

function Tercero() {
  return (
    <h1>Tercero</h1>
  );
}

function Fin() {
  return (
    <h1>Felicidades, terminaste el tutorial</h1>
  );
}

export default Contenedor;
