/*global $, Handlebars*/
(function(ref) {
  var header = function() {
    return Handlebars.compile($("#header").html())();
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
    var clearCompleted = (model.todos.length - itemsLeft) > 0;

    var allSelected = !model.filter || model.filter.length < 2;
    var activeSelected = model.filter === "active";
    var completedSelected = model.filter === "completed";

    return Handlebars.compile($("#footer").html())({
      itemsLeftText,
      clearCompleted,
      allSelected,
      activeSelected,
      completedSelected
    });
  };

  var todoapp = function(model, actions) {
    return "<section class='todoapp'>" +
      header() +
      main(model, actions) +
      footer(model) +
      "</section>";
  };

  var info = function() {
    return Handlebars.compile($("#info").html())();
  };

  var view = function(model, actions) {
    return todoapp(model, actions) + info();
  };

  ref.view = view;
})(window);
