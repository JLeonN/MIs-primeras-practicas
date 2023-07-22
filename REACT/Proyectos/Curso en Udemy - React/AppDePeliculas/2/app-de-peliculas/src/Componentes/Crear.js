import React from 'react'

export const Crear = () => {
  const titulo = "Añadir pelicula";

  const conseguirDatosForm = e => {
    e.preventDefault();


    let target = e.target;
    let titulo = target.title.value;
    let descripcion = target.descripcion.value;

    // let peli = {
    //     id:
    // }
  }

  return (
    <div className="add">
      <h3 className="title">{titulo}</h3>

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
