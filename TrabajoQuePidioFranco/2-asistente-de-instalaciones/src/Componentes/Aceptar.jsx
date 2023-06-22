import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Aceptar(props) {
  const { Casilla } = props;

  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  return (
    <div className='p-2'>
      <div>
        <input
          type="checkbox"
          name="casilla" />{Casilla}
        checked={checkboxChecked}
        onChange={handleCheckboxChange}
        {' '}
      </div>
      {/* <Link to={ruta}>
        <button type="button" class="btn btn-primary">{infBoton}</button>
      </Link> */}
    </div>

  );
}

export default Aceptar;
