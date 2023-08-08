import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

  // const [listadoState, setListadoState] = useState([]);

  const [editar, setEditar] = useState(0);

  useEffect(() => {

    console.log("Lol peliculas ahora si puto");
    conseguirPeliculas();

  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);

    return peliculas;
  }

  const borrarPeli = (id) => {
    //Conseguir peliculas alacenadas
    let pelis_almacenadas = conseguirPeliculas();

    //Filtrar peliculas para eliminar
    let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

    //Actualizar estado de lista
    setListadoState(nuevo_array_pelis);

    //Actualizar los datos en el LocalStorage
    localStorage.setItem('pelis',JSON.stringify(nuevo_array_pelis));
  }

  return (
    <>
      {listadoState != null ?
      listadoState.map(peli => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="descripcion">{peli.descripcion}</p>
              <button className="edit" onClick={ () => setEditar(peli.id)}>Editar</button>
              <button className="delete" onClick={ () => borrarPeli(peli.id)}>Borrar</button>

              {/* Forulario de edicion */}
              {editar === peli.id && (
                
                <Editar peli={peli} />

              )}

            </article>
          );
        })
      : <h2>No hay peliculas para mostrar</h2>
      }
    </>
  )
}