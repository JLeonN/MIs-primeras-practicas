import React from 'react';
import '../Hojas-de-estlo/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={ require(`../Imagenes/${props.imagen}.jpg`)}
      alt='Foto de perfil' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> de {props.pais}
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>
          {props.testimonio}
        </p>
      </div>
    </div>
  );
}


export default Testimonio;