// let i = 0;

// while (i <= 2) {
//   console.log("lol");
//   i++;
// }


// let arreglo = [];
// let x = 0;

// console.log(arreglo);

// while (x <= 10) {
//   arreglo.push(x);
//   x++;
// }

// console.log(arreglo);


function pedir(msg) {
  const fs = require("fs");
  const buffer = Buffer.alloc(1024);
  if (msg) fs.writeSync(process.stdout.fd, msg);
  fs.readSync(process.stdin.fd, buffer);
  const excluded = [13, 10, 0];
  return buffer.filter(function (el) {
    return !excluded.includes(el);
  }).toString();
}

function pedirNombre() {
  const nombre = pedir("Ingresar nombre: ");
  return nombre;
};

function preguntar() {
  let continuar = pedir("¿Deseas continuar? (Escribe 'si' o 'no') ");
  if (continuar == "si") {
    return true;
  } else {
    return false;
  }
};

function pedirNombreLista() {
  let lista = [];
  lista.push(pedirNombre());
  while (preguntar()) {
    lista.push(pedirNombre());
  }
  return lista;
};

function aleatorio() {
  let nombreAleatorio = pedirNombreLista();
  let aleatorio = Math.floor(Math.random() * nombreAleatorio.length);

  return "Nombre aleatorio: " + nombreAleatorio [aleatorio];
};

console.log(aleatorio());
