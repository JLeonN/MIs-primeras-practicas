const fecha = document.querySelector(`#fecha`)
const lista = document.querySelector(`#lista`)
const input = document.querySelector(`#input`)
const botonEnter = document.querySelector(`#boton-enter`)
const check = `bi bi-circle`
const uncheck = `bi bi-trash`
const lineThrough = `line-through`
let id = 0

// Funcion Lista de tareas
function agregarTarea (tarea,id,realizado,eliminado) {

    if(eliminado){return}

    const REALIZADO = realizado ?check :uncheck
    const LINE = realizado ?lineThrough :``

    const elemento =`<li id="elemento">
                        <i class="bi ${REALIZADO}" data="realizado" id="${id}"></i>
                        <p class="text ${LINE}">${tarea}</p>
                        <i class="bi bi-trash" data="eliminado" id="${id}"></i>
                    </li>`
    lista.insertAdjacentHTML("beforeend",elemento)
}

// Function tarea realizada
function tareaRealizada(element) {
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector(`.text`).classList.toggle(lineThrough)
}

botonEnter.addEventListener('click',()=> {
    const tarea = input.value
    if(tarea) {
        agregarTarea(tarea,id,false,false)
    }
    input.value=''
    id++
})

document.addEventListener(`keyup`,function(event){
    if(event.key=='Enter'){
        const tarea = input.value
        if(tarea) {
            agregarTarea(tarea,id,false,false)
        }
    input.value=``
    id++
    }
})

lista.addEventListener(`click`,function(event){
    const element = event.target
    const elementData = element.attributes.data.value
    if(elementData===`realizado`){
        tareaRealizada(element)
    }
    else if (elementData===`eliminado`){
        tareaEliminada(element)
    }
})