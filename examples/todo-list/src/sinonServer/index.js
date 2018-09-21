var sinon = require("sinon");

module.exports = function() {
  var server = sinon.fakeServer.create();
  server.autoRespond = true;
  server.autoRespondAfter = 1000;
  var headers = {"Content-Type": "application/json"};

  // Counter to fake/simulate errors every N requests.
  var counter = 0;
  var failureRate = 4;

  var requestShouldSucceed = function(request) {
    counter++;

    if (counter % failureRate === 0) {
      counter = 0;
      request.respond(500, headers, "The request failed.");
      return false;
    }
    return true;
  };

  var createTodoList = function() {
    return [
      {id: 1, priority: 1, description: "Buy more beer"},
      {id: 2, priority: 1, description: "Order pizza"},
      {id: 3, priority: 2, description: "Eat pie"},
      {id: 4, priority: 4, description: "Watch TV"},
      {id: 5, priority: 5, description: "Sleep"}
    ];
  };
  var todoList = [];

  var nextId = 6;

  var getTodoList = function() {
    if (todoList.length === 0) {
      todoList = createTodoList();
    }
    return todoList;
  };

  server.respondWith("GET", "/todoList", function(request) {
    if (requestShouldSucceed(request)) {
      request.respond(200, headers, JSON.stringify(getTodoList()));
    }
  });

  var deleteTodo = function(todoId) {
    for (var i = 0, t = todoList.length; i < t; i++) {
      if (todoList[i].id === todoId) {
        todoList.splice(i, 1);
        break;
      }
    }
  };

  server.respondWith("DELETE", /\/api\/deleteTodo\/(\d+)/, function(request, todoId) {
    if (requestShouldSucceed(request)) {
      deleteTodo(parseInt(todoId, 10));
      request.respond(204);
    }
  });

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
  };

  server.respondWith("POST", "/api/saveTodo", function(request) {
    if (requestShouldSucceed(request)) {
      const todo = JSON.parse(request.requestBody);
      request.respond(200, headers, JSON.stringify(saveTodo(todo)));
    }
  });
};
