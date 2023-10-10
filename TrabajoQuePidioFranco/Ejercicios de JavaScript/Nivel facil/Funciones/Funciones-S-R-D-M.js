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

let resultadoSumar = sumar(50, 25);
let resultadoRestar = restar(90, 15);
let resultadoDividir = dividir(150, 2);
let resultadoMultiplicar = multiplicar(5, 15);


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

console.log(calcular(50, "+", 25));