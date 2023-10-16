const fs = require('fs');
const pedir = msg => {
  fs.writeSync(1, String(msg));
  let s = '', buf = Buffer.alloc(1);
  while (buf[0] - 10 && buf[0] - 13)
    s += buf, fs.readSync(0, buf, 0, 1, 0);
  return s.slice(1);
};

function sumar(num1, num2) {
  return num1 + num2;
};

function restar(num1, num2) {
  return num1 - num2;
};

function dividir(num1, num2) {
  return num1 / num2;
};

function multiplicar(num1, num2) {
  return num1 * num2;
};


function calcular(num1, operacion, num2) {
  if (operacion == "+") {
    return sumar(num1, num2);
  }
  if (operacion == "-") {
    return restar(num1, num2);
  }
  if (operacion == "/") {
    return dividir(num1, num2);
  }
  if (operacion == "*") {
    return multiplicar(num1, num2);
  }
}

// console.log(calcular(50, "+", 25));

function pedirValores() {
  const num1 = pedir("Primer numero");
  // const lol = pedir("lol");
  const num2 = pedir("Segundo numero");

  return calcular(num1, operacion, num2);
};

console.log (pedirValores ());