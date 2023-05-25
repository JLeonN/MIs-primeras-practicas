import React from "react";
import '../Hojas-de-estilos/Inicio.css'
import imagenPiedraPapelOTijera from '../Imagenes/Piedra papel o tijera..png';

function Inicio() {
  return (
    <div className="contenedor">
      <a href="https://www.ejemplo.com">
        <img src={imagenPiedraPapelOTijera} alt="Piedra papel o tijera." />
      </a>
    </div>
  );
}

export default Inicio;