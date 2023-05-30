import React from 'react';
import '../Hojas-de-estilos/Cartas.css'
import piedraImg from '../Imagenes/Piedra.jpg';
import papelImg from '../Imagenes/Papel.jpg';
import tijeraImg from '../Imagenes/Tijera.jpg';

export default [
  { 'piedra':piedraImg,
    // 'title':'Piedra'
  },

  { 'papel':papelImg,
    // 'title':'Papel'
  },

  { 'tijera':tijeraImg,
    // 'title':'Tijera'
  }
]



















// const manosImagenes  = {
//   piedra: piedraImg,
//   papel: papelImg,
//   tijera: tijeraImg
// };

// function Manos({ type }) {
//   return (
//     <div className='manosImg'>
//       <img src={manosImagenes[type]} alt={type} />
//     </div>
//   );
// }

// export default Manos;