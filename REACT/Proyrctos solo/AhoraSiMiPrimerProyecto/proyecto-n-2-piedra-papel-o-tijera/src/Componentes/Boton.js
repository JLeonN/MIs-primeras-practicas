import React from 'react';

function Boton({ label, onClick }) {
  return (
    <div className='d-grid gap-2 col-6 mx-auto'>
      <button className="btn btn-primary"
        type="button"
        onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

export default Boton;