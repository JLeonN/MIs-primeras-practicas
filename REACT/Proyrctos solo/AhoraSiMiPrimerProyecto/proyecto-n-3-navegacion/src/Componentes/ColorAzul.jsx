import React from 'react';
import { useNavigate } from 'react-router-dom';

function ColorAzul() {
  const navigate = useNavigate();

  const volverInicio = () => {
    navigate('/');
  };

  return (
    <div className='container' style={{ backgroundColor: 'blue' }}>
      <p className="text-primary">Azul</p>
      <button type="button" className="btn btn-light" onClick={volverInicio}>Volver al inicio</button>
    </div>
  );
}

export default ColorAzul;