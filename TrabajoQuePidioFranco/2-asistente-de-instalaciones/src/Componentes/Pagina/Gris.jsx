import React from 'react';
import { Link } from 'react-router-dom';

function Gris() {
  return (
    <div>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/">
        <button type="button" className="btn btn-primary">Ir a la página principal</button>
      </Link>
    </div>
  );
}

export default Gris;
