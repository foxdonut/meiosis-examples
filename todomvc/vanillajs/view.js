(function(ref) {
  var header = function() {
    return "  <header class='header'>" +
      "    <h1>todos</h1>" +
      "    <input class='new-todo' placeholder='What needs to be done?' autofocus>" +
      "  </header>";
  };

  var main = function(model, _actions) {
    var renderedTodos = model.todos.map(renderTodo(model.meta)).join("");

    return "  <section class='main'>" +
      "    <input class='toggle-all' type='checkbox'>" +
      "    <label for='toggle-all'>Mark all as complete</label>" +
      "    <ul class='todo-list'>" +
             renderedTodos +
      "    </ul>" +
      "  </section>";
  };

  var renderTodo = function(meta) {
    return function(todo) {
      var isEditing = meta[String(todo.id)] && meta[String(todo.id)].editing;
      var dataId = " data-id='" + todo.id + "'";
      var completed = todo.completed ? " class='completed'" : "";
      var checked = todo.completed ? " checked" : "";
      var editing = isEditing ? " class='editing'" : "";
      var input = isEditing ?
        "<input" + dataId + " type='text' class='edit' value='" + todo.title + "'>" : "";

      return "<li" + completed + editing + ">" +
        "<div class='view'>" +
        "<input" + dataId + " class='toggle' type='checkbox'" + checked + ">" +
        "<label" + dataId + ">" + todo.title + "</label>" +
        "<button" + dataId + " class='destroy'></button>" +
        "</div>" +
        input +
        "</li>";
    };
  };

  var footer = function(model) {
    var notCompleted = function(todo) { return !todo.completed; };
    var itemsLeft = model.todos.filter(notCompleted).length;
    var itemsLeftText = model.todos.length > 0 ?
      (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : "";
    var clearCompleted = (model.todos.length - itemsLeft) > 0 ?
      "<button class='clear-completed'>Clear completed</button>" : "";

    var classSelected = " class='selected'";
    var allSelected = !model.filter || model.filter.length < 2 ? classSelected : "";
    var activeSelected = model.filter === "active" ? classSelected : "";
    var completedSelected = model.filter === "completed" ? classSelected : "";

    return "  <footer class='footer'>" +
      "    <span class='todo-count'>" + itemsLeftText + "</span>" +
      "    <ul class='filters'>" +
      "      <li>" +
      "        <a href='#/'" + allSelected + ">All</a>" +
      "      </li>" +
      "      <li>" +
      "        <a href='#/active'" + activeSelected + ">Active</a>" +
      "      </li>" +
      "      <li>" +
      "        <a href='#/completed'" + completedSelected + ">Completed</a>" +
      "      </li>" +
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
      "  <p>Created by <a href='http://twitter.com/foxdonut00'>foxdonut00</a></p>" +
      "  <p>Part of <a href='http://todomvc.com'>TodoMVC</a></p>" +
      "</footer>";
  };

  var view = function(model, actions) {
    return todoapp(model, actions) + info();
  };

  ref.view = view;
})(window);
