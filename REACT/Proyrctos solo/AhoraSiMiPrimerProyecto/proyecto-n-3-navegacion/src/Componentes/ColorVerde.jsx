import React from 'react';
import { Link } from 'react-router-dom';

function ColorVerde() {
  return (
    <div className='container' style={{ backgroundColor: 'green' }}>
      <p class="text-success">Verde</p>
      <Link className="btn btn-light" to="/">Volver al inicio
      </Link>
    </div>
  );
}

export default ColorVerde;