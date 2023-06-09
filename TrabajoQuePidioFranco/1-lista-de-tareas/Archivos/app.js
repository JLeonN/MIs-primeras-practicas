document.getElementById('boton').addEventListener('click', savetask);

function savetask(e) {

    let titel = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    const task = {
        titel,
        description
    };

    if (localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        console.log(tasks)
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    getTasks();
    document.getElementById('formTask').reset();
    e.preventDefault();
}

function getTasks() {
    let cosa = localStorage.getItem('tasks');
    let tasks = JSON.parse(cosa);
    let tasksView = document.getElementById('tasks');

    tasksView.innerHTML = '';

    // for(let tarea of tasks) {
    //     let titel = tarea.titel;

    //     tasksView.innerHTML += `<div class="card mb-3">
    //     <div class="card-body">
    //         <p>${titel} <br> ${tarea.description}</p>
    //         <a class="btn btn-danger" onclick="deleteTasks('${titel}')">
    //         Borrar
    //         </a>
    //     </div>
    // </div>`
    // }

    for(let i = 0; i < tasks.length; i++) {
        let titel = tasks[i].titel;
        let description = tasks[i].description;

        tasksView.innerHTML += `<div class="card mb-3">
                                    <div class="card-body">
                                        <p>${titel} <br> ${description}</p>
                                        <a class="btn btn-danger" onclick="deleteTasks('${i}')">
                                        Borrar
                                        </a>
                                    </div>
                                </div>`
    }
}

function deleteTasks(i) {
    let task = JSON.parse(localStorage.getItem('tasks'));
    task.splice(i,1);
    
    localStorage.setItem('tasks', JSON.stringify(task));
    getTasks();
}

getTasks();