import React from "react";
import '../Hojas-de-estilos/Dorso.css'
import dorso from '../Imagenes/Dorso.jpg';

function Dorso() {
  return (
    <div className="contenedor">
      <img src={dorso} alt="Dorso de la carta." />
    </div>
  );
}

export default Dorso;