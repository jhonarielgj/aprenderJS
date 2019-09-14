'use strict';

let boton = document.getElementById('formTask');
boton.addEventListener('submit', saveTask);

// e es el evento cuando se presiona el botón y envía el submit
function saveTask(e) {
    // previente el comportamiento por defecto, en este caso el recargar la página
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    const task = {
        title, //es lo mismo que title: title,
        description //es lo mismo que description: description
    }
    // Con localStorage se puede almacenar datos en el navegador. 
    // localStorage.setItem permite guardarlo
    // JSON.stringify es un método para convertir un objeto a string 
    // localStorage.setItem('tasks', JSON.stringify(task));
    // localStorage.getItem permite recuperar valores guardados
    // JSON.parse es un método que convierte string en objeto
    // console.log(JSON.parse(localStorage.getItem('tasks')));
    if (localStorage.getItem('tasks') ===  null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    getTask();
    document.getElementById('formTask').reset(); //borra el contenido del formulario
    e.preventDefault();
}

function getTask() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');
    tasksView.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;
        tasksView.innerHTML += 
        `<div class="card mb-2">
            <div class="card-body">
                <p>${title} - ${description}</p>
                <a class="btn btn-danger" onclick="deleteTask('${title}')">Eliminar</a>
            </div>
        </div>`;
    }
}

function deleteTask(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title == title) {
            tasks.splice(i, 1); //quitar 1 en la posición i
        }        
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTask();
}

getTask();