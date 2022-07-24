"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoinput');
const form = document.querySelector('form');
const list = document.getElementById("todolist");
const todos = [];
function createTodo(todo) {
    const newLI = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = false;
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    input.value = "";
}
form.addEventListener('submit', handleSubmit);
// btn.addEventListener('click', function () {
// 	alert(input.value);
// 	input.value = '';
// });
