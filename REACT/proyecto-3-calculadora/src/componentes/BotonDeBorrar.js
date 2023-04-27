import React from "react";
import '../Hoja-de-estilos/BotonDeBorrar.css';

const BotonDeBorrar = (props) => (
  <div className='boton-de-borrar'onClick={props.manejarClic}>
    {props.children}
  </div>
);

export default BotonDeBorrar;