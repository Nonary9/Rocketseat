// JavaScript source code
var listElement = document.getElementById("list");
var textElement = document.getElementById("text");
var buttonElement = document.getElementById("button");

var todos = [
    "Fazer Cafe",
    "Estudar",
    "Dormir"
];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

    }
}

renderTodos();

function adcionarTodos() {
    var todoText = textElement.value;
    todos.push(todoText);

    textElement.value = '';
    renderTodos();
}

buttonElement.onclick = adcionarTodos;