import React from 'react';
import piedraImg from '../Imagenes/Piedra.jpg';
import papelImg from '../Imagenes/Papel.jpg';
import tijeraImg from '../Imagenes/Tijera.jpg';

const manosImagenes  = {
  piedra: piedraImg,
  papel: papelImg,
  tijera: tijeraImg
};

function Manos({ type }) {
  return (
    <div className='manosImg'>
      <img src={manosImagenes[type]} alt={type} />
    </div>
  );
}

export default Manos;