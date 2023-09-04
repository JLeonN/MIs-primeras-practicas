import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>

      <form className='contact' action='yoomat.75@hotmail.com'>
        <input type='text' placeholder='Nombre' />
        <input type='text' placeholder='Apellidos' />
        <input type='text' placeholder='Email' />
        <textarea type='text' placeholder='Motivo de contacto' />
        <input type='submit' value="Enviar" />
      </form>
    </div>
  )
}
