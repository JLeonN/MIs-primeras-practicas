import React from 'react';
import Boton from './Boton';
import Colapsar from './Colapsar';

function Estructura(props) {
  const { backgroundColor, titleColor, title, description, infBoton, ruta, mostrarColapsar } = props;

  return (
    <div className="card container p-3 m-3 mx-auto" style={{ width: '18rem' }}>
      <div style={{ backgroundColor }}>
        <h3 className="text-center">{titleColor}</h3>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

        {/* Colapsar */}
        {mostrarColapsar && <Colapsar />}

        {/* Boton */}
        <Boton
          infBoton={infBoton}
          ruta={ruta}
        />
      </div>
    </div>
  );
}

export default Estructura;