import React from 'react'

export const Crear = () => {
  return (
    <>
      <div className="add">
        <h3 className="title">Añadir peliculs</h3>
        <form>
          <input type="text" id="title" placeholder="Titulo" />
          <textarea id="descripcion" placeholder="Descripcion"></textarea>
          <input type="submit" id="save" value="Guardar" />
        </form>
      </div>
    </>
  )
}
