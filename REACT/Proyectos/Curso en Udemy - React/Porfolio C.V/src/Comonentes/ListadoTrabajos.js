import React from 'react'
import { trabajos } from '../Data/trabajos';
import { Link } from 'react-router-dom';

export const ListadoTrabajos = ({ limite = 2 }) => {
  return (
    <section className='works'>
      {
        trabajos.slice(0, limite).map(trabajo => {
          return (
            <article key={trabajo.id} className='work-item'>
              <div className='mask'>
                <img src={'/Imagenes/' + trabajo.imagen} />
              </div>
              <span>{trabajo.categorias}</span>
              <h2><Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link></h2>
              <h3>{trabajo.tecnologias}</h3>
            </article>
          );
        })
      }
    </section>
  )
}
