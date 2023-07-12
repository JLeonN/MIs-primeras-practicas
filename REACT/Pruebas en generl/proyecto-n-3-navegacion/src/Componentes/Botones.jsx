import React from 'react';
import { Link } from 'react-router-dom';

function Botones() {
  return (
    <div className='container row'>
      <Link to='/color-azul'>
        <button type="button" className="btn btn-light">Azul</button>
      </Link>

      <Link to='/color-verde'>
        <button type="button" className="btn btn-light">Verde</button>
      </Link>
    </div>
  );
}

export default Botones;