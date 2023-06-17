import React from 'react';
import { Link } from 'react-router-dom';

function Estructura(props) {
  const { backgroundColor, titleColor, title, description, ruta, boton } = props;

  return (
    <div className="card container p-3 m-3 mx-auto" style={{ width: '18rem' }}>
      <div style={{ backgroundColor }}>
        <h3 className="text-center">{titleColor}</h3>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Estructura;