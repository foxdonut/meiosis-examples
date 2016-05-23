(function(ref) {
  var header = function() {
    return "  <header class='header'>" +
      "    <h1>todos</h1>" +
      "    <input class='new-todo' placeholder='What needs to be done?' autofocus>" +
      "  </header>";
  };

  var main = function(model, _actions) {
    var renderedTodos = model.todos.map(renderTodo).join("");

    return "  <section class='main'>" +
      "    <input class='toggle-all' type='checkbox'>" +
      "    <label for='toggle-all'>Mark all as complete</label>" +
      "    <ul class='todo-list'>" +
             renderedTodos +
      "    </ul>" +
      "  </section>";
  };

  var classIf = function(className) {
    return function(indicator) {
      var classSelected = " class='" + className + "'";
      return indicator ? classSelected : "";
    };
  };

  var renderTodo = function(todo) {
    var dataId = " data-id='" + todo.id + "'";
    var checked = todo.completed ? " checked" : "";
    var input = todo.editing ?
      "<input" + dataId + " type='text' class='edit' value='" + todo.title + "'>" : "";

    return "<li" + classIf("completed")(todo.completed) + classIf("editing")(todo.editing) + ">" +
      "<div class='view'>" +
      "<input" + dataId + " class='toggle' type='checkbox'" + checked + ">" +
      "<label" + dataId + ">" + todo.title + "</label>" +
      "<button" + dataId + " class='destroy'></button>" +
      "</div>" +
      input +
      "</li>";
  };

  var footer = function(model) {
    var clearCompleted = model.clearCompleted ?
      "<button class='clear-completed'>Clear completed</button>" : "";

    var classSelected = classIf("selected");

    return "  <footer class='footer'>" +
      "    <span class='todo-count'>" + model.itemsLeftText + "</span>" +
      "    <ul class='filters'>" +
      "      <li><a href='#/'" + classSelected(model.allSelected) + ">All</a></li>" +
      "      <li><a href='#/active'" + classSelected(model.activeSelected) + ">Active</a></li>" +
      "      <li><a href='#/completed'" + classSelected(model.completedSelected) + ">Completed</a></li>" +
      "    </ul>" +
      clearCompleted +
      "  </footer>";
  };

  var todoapp = function(model, actions) {
    return "<section class='todoapp'>" +
      header() +
      main(model, actions) +
      footer(model) +
      "</section>";
  };

  var info = function() {
    return "<footer class='info'>" +
      "  <p>Double-click to edit a todo</p>" +
      "  <p>Meiosis - VanillaJs - Created by <a href='http://twitter.com/foxdonut00'>foxdonut00</a></p>" +
      "  <p>Part of <a href='http://todomvc.com'>TodoMVC</a></p>" +
      "</footer>";
  };

  var view = function(model, actions) {
    return todoapp(model, actions) + info();
  };

  ref.view = view;
})(window);
