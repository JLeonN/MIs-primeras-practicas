import React, { useEffect, useState } from 'react'

export const Listado = () => {

  const [listadoState, setListadoState] = useState([])

  // useEffect(() => {

  //   console.log("Peliculas del listado");
  //   conseguirPeliculas();
    
  // }, []);

  // const conseguirPeliculas = () => {
  //   let peliculas = JSON.parse(localStorage.getItem("pelis"));

  //   setListadoState(peliculas);
  // }

  return (
    <>
      {listadoState.map(peli => {

        return (
          <article className="peli-item">
            <h3 className="title">Desarrollo WEB</h3>
            <p className="descripcion">Mis peliculas</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </article>
        );
      })}
    </>
  )
}
