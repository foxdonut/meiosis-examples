const STORAGE_KEY = "meiosis-todomvc";

const findIndex = function(todos, todoId) {
  let index = -1;

  for (let i = 0, t = todos.length; i < t; i++) {
    if (todos[i].id === todoId) {
      index = i;
      break;
    }
  }
  return index;
};

const replaceTodoAtIndex = function(todos, todo, index) {
  return todos.slice(0, index).concat([todo]).concat(todos.slice(index + 1));
};

const deleteTodoAtIndex = function(todos, index) {
  return todos.slice(0, index).concat(todos.slice(index + 1));
};

export const todoStorage = {
  loadAll: function() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },
  saveAll: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    return todos;
  },
  saveTodo: function(todo) {
    let todos = this.loadAll();
    const id = parseInt(todo.id, 10);

    if (id > 0) {
      const index = findIndex(todos, id);
      todo.completed = todos[index].completed;
      todos = replaceTodoAtIndex(todos, todo, index);
    }
    else {
      todos = todos.concat([{title: todo.title, id: new Date().getTime(), completed: false}]);
    }
    return this.saveAll(todos);
  },
  deleteTodoId: function(todoId) {
    let todos = this.loadAll();
    const index = findIndex(todos, todoId);

    if (index >= 0) {
      todos = deleteTodoAtIndex(todos, index);
      this.saveAll(todos);
    }
    return todos;
  },
  setCompleted: function(id, completed) {
    let todos = this.loadAll();
    const index = findIndex(todos, id);

    if (index >= 0) {
      const todo = todos[index];
      todo.completed = completed;
      todos = replaceTodoAtIndex(todos, todo, index);
      this.saveAll(todos);
    }
    return todos;
  },
  setAllCompleted: function(completed) {
    const todos = this.loadAll();
    todos.forEach(function(todo) {
      todo.completed = completed;
    });
    this.saveAll(todos);
    return todos;
  },
  clearCompleted: function() {
    const todos = this.loadAll();
    const updatedTodos = [];

    for (let i = 0, t = todos.length; i < t; i++) {
      if (!todos[i].completed) {
        updatedTodos.push(todos[i]);
      }
    }
    return this.saveAll(updatedTodos);
  }
};
