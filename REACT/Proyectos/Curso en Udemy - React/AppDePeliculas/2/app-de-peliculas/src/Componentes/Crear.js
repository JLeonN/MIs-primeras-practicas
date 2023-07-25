import React, { useState } from 'react'

export const Crear = () => {
  const tituloComponente = "Añadir pelicula";
  const [peliState, setPeliState] = useState({
    titulo: '',
    describe: ''
  });

  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = e => {
    e.preventDefault();


    let target = e.target;
    let titulo = target.title.value;
    let descripcion = target.descripcion.value;

    // Crear objeto de la pelicula a guardar
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    };

    // Guardar estado
    setPeliState(peli);

    // Guardar en el almacenamiento local
    guardarEnnnStorage(peli);
  }

  const guardarEnnnStorage = peli => {

    // Conseguir los elementos que ya tennemos en Localstorage
    let elementos = JSON.parse(localStorage.getItem("pelis"));

    // comprobar si es una array
    if(Array.isArray(elementos)){
      elementos.push(peli);
    }else{
      elementos = [peli];
    }

    // guardar en el Localstorage
    localStorage.setItem("pelis", JSON.stringify(elementos));

    // devolver objeto guardado
    return peli;
  }

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>

      <strong>
        {(titulo && descripcion) && "Has creado la pelicula: " + titulo}
      </strong>

      <form onSubmit={conseguirDatosForm}>
        <input type="text"
          id="title"
          placeholder="Titulo" />

        <textarea id="descripcion"
          name='descripcion'
          placeholder="Descripcion"></textarea>

        <input
          type="submit"
          id="save"
          value="Guardar" />
      </form>
    </div>
  )
}
