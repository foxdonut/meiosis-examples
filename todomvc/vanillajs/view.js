(function(ref) {
  var header = function() {
    return "  <header class='header'>" +
      "    <h1>todos</h1>" +
      "    <input class='new-todo' placeholder='What needs to be done?' autofocus>" +
      "  </header>";
  };

  var main = function(model, _actions) {
    var todoItems = (model.todoItems || []).map(todoItem).join("");

    return "  <section class='main'>" +
      "    <input class='toggle-all' type='checkbox'>" +
      "    <label for='toggle-all'>Mark all as complete</label>" +
      "    <ul class='todo-list'>" +
             todoItems +
      "    </ul>" +
      "  </section>";
  };

  var todoItem = function(todoItem) {
    return "<li data-id='" + todoItem.id + "' class='{{completed}}'>" +
      "<div class='view'>" +
			"<input class='toggle' type='checkbox' {{checked}}>" +
			"<label>" + todoItem.title + "</label>" +
			"<button class='destroy'></button>" +
			"</div>" +
      "</li>";
  };

  var footer = function(model, _actions) {
    return "  <footer class='footer'>" +
      "    <span class='todo-count'></span>" +
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
      footer(model, actions) +
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
