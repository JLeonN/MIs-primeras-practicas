import React from 'react'
import { trabajos } from '../Data/trabajos';

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>

      {
        trabajos.map(trabajo => {
          return (
            <article>
              <h2>{trabajo.nombre}</h2>
            </article>
          );
        })
      }

    </div>
  )
}
