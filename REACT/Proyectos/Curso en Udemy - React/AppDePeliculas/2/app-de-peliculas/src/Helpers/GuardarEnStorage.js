export const GuardarEnStorage = (clave, elemento) => {

  // Conseguir los elementos que ya tennemos en Localstorage
  let elementos = JSON.parse(localStorage.getItem(clave));

  // comprobar si es una array
  if (Array.isArray(elementos)){

    elementos.push(elemento);
  }else{

    elementos = [elemento];
  }

  // guardar en el Localstorage
  localStorage.setItem(clave, JSON.stringify(elementos));

  // devolver objeto guardado
  return elemento;
}
