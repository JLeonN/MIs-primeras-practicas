import React from 'react';

import image1 from '../Assets/image1.jpg';

function Card() {
  return (
    <div className='card text-center bg-dark'>
      <img src='{image1}' alt='image1' />
      <div className='card-body text-light'>
        <h4 className='card-title'>Mi titulo</h4>
        <p className='card-text text-secondary'>Sumérgete en el mundo de Destiny 2 para explorar los misterios del sistema solar y vive la experiencia de combate de respuesta rápida de este shooter en primera persona. Consigue poderosas habilidades elementales y colecciona equipamiento único para personalizar tanto el aspecto como el estilo de juego de tu guardián. Disfruta de la historia cinemática de Destiny 2, de misiones cooperativas desafiantes y de diferentes modos PvP, ya sea en solitario o con amigos.
        <a href='#!' className='btn btn-outline-secondary rounded-0'>
          GO!
        </a>
        </p>
      </div>
    </div>
  )
};

export default Card;