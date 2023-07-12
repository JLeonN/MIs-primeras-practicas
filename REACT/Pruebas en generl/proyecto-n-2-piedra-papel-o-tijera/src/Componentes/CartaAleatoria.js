import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import piedraImg from '../Imagenes/Piedra.jpg';
import papelImg from '../Imagenes/Papel.jpg';
import tijeraImg from '../Imagenes/Tijera.jpg';

function CartaAleatoria() {
  const [carta, setCarta] = useState('');

  const cartas = [piedraImg, papelImg, tijeraImg];

  const handleObtenerCarta = () => {
    const cartaAleatoria = _.sample(cartas);
    setCarta(cartaAleatoria);
  };

  useEffect(() => {
    handleObtenerCarta();
  }, []);

  return (
    <div>
      {carta && (
        <img
          src={carta}
          className='img-fluid dorso'
          alt='Carta Aleatoria'
        />
      )}
    </div>
  );
}

export default CartaAleatoria;
