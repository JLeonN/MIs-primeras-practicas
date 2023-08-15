import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {
	const titulo_componente = "Editar pelicula";

  const guardarEdicion = (e, id) =>{
    // e.preventDeFault();

    //Conseguir el targfet del evento
    let target = e.target;

    //buscar el indice del objeto de la pelicula a actualizar
    const pelis_almacenadas = conseguirPeliculas();
    const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

    // crear objeto con ese indece
    let pelis_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value
    };

    // Actualizar el elemento
    pelis_almacenadas[indice] = pelis_actualizada;

    //Guardar
    localStorage.setItem("pelis",JSON.stringify(pelis_almacenadas));

    //Actualizar
    setListadoState(pelis_almacenadas);
    setEditar(0);
  }

	return (
		<div className='edit_form'>
			<h3 className='title'>{titulo_componente}</h3>
			<form onSubmit={ e => guardarEdicion(e, peli.id)}>
				<input
					type='texto'
					name='titulo'
					className='titulo_editado'
					defaultValue={peli.titulo} />
				<textarea
					name='descripcion'
					defaultValue={peli.descripcion}
					className='descripcion_editada' />

					<input type='submit' className='editar' value='Actualizar' />
			</form>
		</div>
	)
}
