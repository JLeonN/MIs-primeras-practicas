import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ColorVerde() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  return (
    <div className='container' style={{ backgroundColor: 'green' }}>
      <p className="text-success">Verde</p>
      <div className=''>
        <input
          type="checkbox"
          name="casilla"
          checked={checkboxChecked}
          onChange={handleCheckboxChange}
        />{' '}
        Seleccione para ir al inicio
      </div>
      <Link className="btn btn-light" to={checkboxChecked ? "/" : "#"}>Volver al inicio
      </Link>
    </div>
  );
}

export default ColorVerde;
