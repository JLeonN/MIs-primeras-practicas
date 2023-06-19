import React from 'react';
import { Link } from 'react-router-dom';

function Boton(props) {
  const { infBoton, ruta } = props;

  return (
      <Link to={ruta}>
        <button type="button" class="btn btn-primary">{infBoton}</button>
      </Link>
  );
}

export default Boton;