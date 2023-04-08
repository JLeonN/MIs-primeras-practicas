let Gratis = false;
const validarcliente = (time)=>{
    let edad = prompt("Cual es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && Gratis == false) {
            alert("Podes pasar gratis porque sos la primer persona despues de las 2 AM");
            Gratis = true;
        } else{
            alert(`Son las ${time}:00Hs y poodes pasar, pero tenes que pagar entrada`);
        }
    } else {
        alert("Sos menor,22 no entras loco");
    }
}

validarcliente(23);
validarcliente(24);
validarcliente(0.2);
validarcliente(0.6);
validarcliente(1);
validarcliente(2);
validarcliente(2.6);
validarcliente(3);17