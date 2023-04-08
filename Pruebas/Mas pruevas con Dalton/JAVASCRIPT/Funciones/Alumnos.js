let Cantidad = prompt("Cuantos alumnos son?");
let alumnostotales = [];

for (i = 0; i < Cantidad; i++) {
    alumnostotales[i] = [prompt("Nombre del alumnos " + (i+1)),0];
}

const Tomarlista = (nombre,p)=>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnostotales[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alumno in alumnostotales) {
        Tomarlista(alumnostotales[alumno][0],alumno);
    }
}

for (alumno in alumnostotales) {
    let resultado = `${alumnostotales[alumno][0]}:<br>
            Presentes: ${alumnostotales[alumno][1]}:<br>
            Faltas: ${30- alumnostotales[alumno][1]}
            `;
            if (30 - alumnostotales[alumno][1] > 18) {
                resultado+= "<b>REPROBADO POOR FALTAR</b><br><br>";
            } else {
                resultado+= "<br><br>"
            }
            document.write(resultado)
}


//Preguntar a Franco   parseInt   y sobre   $   y   a