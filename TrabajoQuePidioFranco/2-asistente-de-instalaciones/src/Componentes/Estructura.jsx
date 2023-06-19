import React from 'react';
import Boton from './Boton';
import Colapsar from './Colapsar';
import Aceptar from './Aceptar';

function Estructura(props) {
  const { backgroundColor, titleColor, title, description, infBoton, ruta, mostrarColapsar, mostrarAceptar, Casilla } = props;

  return (
    <div className="card container p-3 m-3 mx-auto" style={{ width: '22rem' }}>
      <div style={{ backgroundColor }}>
        <h3 className="text-center">{titleColor}</h3>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>

        {/* Aceptar los términos y condiciones */}
        {mostrarAceptar && <Aceptar
          Casilla={Casilla}
        />}

        {/* Colapsar */}
        {mostrarColapsar && <Colapsar />}

        {/* Boton */}
        <div className='col'>
          <Boton
            infBoton={infBoton}
            ruta={ruta}
          />
          <Boton
            infBoton="Cancelar"
            ruta="/"
            />
        </div>
      </div>
    </div>
  );
}

export default Estructura;