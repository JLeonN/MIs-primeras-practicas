import React, { useEffect, useState } from 'react'

export const Listado = () => {

  const [listadoState, setListadoState] = useState([]);

  useEffect(() => {

    console.log("Lol peliculas ahora si puto");
    conseguirPeliculas();

  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);
  }

  return (
    <>
      {listadoState != null ?
      listadoState.map(peli => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="descripcion">{peli.descripcion}</p>
              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
            </article>
          );
        })
      : <h2>No hay peliculas para mostrar</h2>
      }
    </>
  )
}