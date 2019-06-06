// JavaScript source code
var listElement = document.getElementById("list");
var textElement = document.getElementById("text");
var buttonElement = document.getElementById("button");

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteTodo('+ pos +')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);

    }
}

renderTodos();

function adcionarTodos() {
    var todoText = textElement.value;
    todos.push(todoText);

    textElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = adcionarTodos;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}