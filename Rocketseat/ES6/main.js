class TodoList{
    constructor(){
        this.todo = [];
    }
    static addTodo(){
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

TodoList.addTodo();