(function(ref) {
  var header = function() {
    return "  <header class='header'>" +
      "    <h1>todos</h1>" +
      "    <input class='new-todo' placeholder='What needs to be done?' autofocus>" +
      "  </header>";
  };

  var main = function(model, _actions) {
    // FIXME
    var renderedTodos = (model.todos || []).map(renderTodo).join("");

    return "  <section class='main'>" +
      "    <input class='toggle-all' type='checkbox'>" +
      "    <label for='toggle-all'>Mark all as complete</label>" +
      "    <ul class='todo-list'>" +
             renderedTodos +
      "    </ul>" +
      "  </section>";
  };

  var renderTodo = function(todo) {
    var completed = todo.completed ? " class='completed'" : "";
    var checked = todo.completed ? " checked" : "";

    return "<li" + completed + ">" +
      "<div class='view'>" +
			"<input data-id='" + todo.id + "' class='toggle' type='checkbox'" + checked + ">" +
			"<label>" + todo.title + "</label>" +
			"<button data-id='" + todo.id + "' class='destroy'></button>" +
			"</div>" +
      "</li>";
  };

  var footer = function(model) {
    // FIXME
    var todos = (model.todos || []);
    var notCompleted = function(todo) { return !todo.completed; };
    var itemsLeft = todos.filter(notCompleted).length;
    var itemsLeftText = todos.length > 0 ?
      (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : "";

    return "  <footer class='footer'>" +
      "    <span class='todo-count'>" + itemsLeftText + "</span>" +
      "    <ul class='filters'>" +
      "      <li>" +
      "        <a href='#/' class='selected'>All</a>" +
      "      </li>" +
      "      <li>" +
      "        <a href='#/active'>Active</a>" +
      "      </li>" +
      "      <li>" +
      "        <a href='#/completed'>Completed</a>" +
      "      </li>" +
      "    </ul>" +
      "    <button class='clear-completed'>Clear completed</button>" +
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
