import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Aceptar(props) {
  const { mostrarBoton } = props;
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  return (
    <div className='p-2'>
      <div>
        <input type="checkbox" 
          checked={checkboxChecked} 
          onChange={handleCheckboxChange}
        /> Aceptar los términos
      </div>
      {mostrarBoton && (
        <Link to="/color-amarillo">
          <button type="button" className="btn btn-primary">Sigiente</button>
        </Link>
      )}
    </div>
  );
}

export default Aceptar;
