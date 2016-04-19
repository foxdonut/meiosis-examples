// app.js
var koa = require("koa");

var app = koa();

var routes = require("koa-route");
var parse = require("co-body");
var serve = require("koa-static");

app.use(serve("public"));

var createTodoList = function() {
  return [
    {id: 1, priority: 1, description: "Buy more beer"},
    {id: 2, priority: 1, description: "Order pizza"},
    {id: 3, priority: 2, description: "Eat pie"},
    {id: 4, priority: 4, description: "Watch TV"},
    {id: 5, priority: 5, description: "Sleep"}
  ];
}
var todoList = [];

var nextId = 6;

var getTodoList = function() {
  return new Promise(function(resolve) {
    setTimeout(() => {
      if (todoList.length === 0) {
        todoList = createTodoList();
      }
      resolve(todoList);
    }, 2); // increase value to simulate slower server response
  });
};


var onTodoList = function*() {
  this.body = yield getTodoList();
};

app.use(routes.get("/todoList", onTodoList));
app.use(routes.get("/api/todoList", onTodoList));

var deleteTodo = function(todoId) {
  for (var i = 0, t = todoList.length; i < t; i++) {
    if (todoList[i].id === todoId) {
      todoList.splice(i, 1);
      break;
    }
  }
};

var onDeleteTodo = function*(todoId) {
  deleteTodo(parseInt(todoId, 10));
  this.body = yield getTodoList();
};

app.use(routes.del("/deleteTodo/:todoId", onDeleteTodo));

var api_onDeleteTodo = function*(todoId) {
  deleteTodo(parseInt(todoId, 10));
  this.status = 204;
};

app.use(routes.del("/api/deleteTodo/:todoId", api_onDeleteTodo));

var saveTodo = function(todo) {
  todo.priority = parseInt(todo.priority, 10);

  if (!todo.id) {
    todo.id = nextId;
    nextId++;
    todoList.push(todo);
  }
  else {
    todo.id = parseInt(todo.id, 10);
    for (var i = 0, t = todoList.length; i < t; i++) {
      if (todoList[i].id === todo.id) {
        todoList[i] = todo;
        break;
      }
    }
  }
  return todo;
}

var onSaveTodo = function*() {
  saveTodo(yield parse.json(this));
  this.body = yield getTodoList();
};

app.use(routes.post("/saveTodo", onSaveTodo));

var api_onSaveTodo = function*() {
  this.body = saveTodo(yield parse.json(this));
};

app.use(routes.post("/api/saveTodo", api_onSaveTodo));

module.exports = app;

