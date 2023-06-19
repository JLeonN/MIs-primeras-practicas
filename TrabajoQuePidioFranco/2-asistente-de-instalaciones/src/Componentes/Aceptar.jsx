import React from 'react';

function Aceptar(props) {
  const { Casilla } = props;

  return (
    <div className='p-2'>
      <input 
        type="checkbox" 
        name="casilla" />{Casilla}
    </div>
  );
}

export default Aceptar;
