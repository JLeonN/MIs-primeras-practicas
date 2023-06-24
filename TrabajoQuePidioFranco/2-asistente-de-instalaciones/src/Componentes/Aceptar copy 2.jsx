import React, { useState } from 'react';

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
    </div>

  );
}

export default Aceptar;
