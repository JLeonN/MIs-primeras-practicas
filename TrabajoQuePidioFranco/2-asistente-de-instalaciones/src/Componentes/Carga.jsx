import React from 'react';
import './CargaCSS.css';

function Carga() {
  return (
    <div className="progress-container" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
      <div className="progress-bar overflow-visible text-dark" >
        Procesando datos de sistema
      </div>
    </div>
  );
}

export default Carga;
