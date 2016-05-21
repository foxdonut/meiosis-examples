/*global m */
(function(ref) {
  var header = function(actions) {
    var onKeyPress = function(evt) {
      actions.saveTodo(evt.keyCode, evt.target.value);
    };

    return m("header.header", [
      m("h1", "todos"),
      m("input.new-todo", {placeholder: "What needs to be done?", autoFocus: true, onkeypress: onKeyPress})
    ]);
  };

  var main = function(model, actions) {
    var renderedTodos = model.todos.map(renderTodo(actions, model.meta));

    return m("section.main", [
      m("input.toggle-all[type=checkbox]"),
      m("label", {for: "toggle-all"}, "Mark all as complete"),
      m("ul.todo-list", renderedTodos)
    ]);
  };

  var renderTodo = function(actions, meta) {
    return function(todo) {
      var isEditing = meta[String(todo.id)] && meta[String(todo.id)].editing;

      var todoClasses = [
        todo.completed ? ".completed" : "",
        isEditing ? ".editing" : ""
      ].join("");

      var input = isEditing ?
        m("input.edit[type=text]", {value: todo.title}) : m("span");

      var onToggleTodo = function(todoId) {
        return function(evt) {
          actions.setCompleted(todoId, evt.target.checked);
        };
      };

      var onEditTodo = function(todoId) {
        return function(_evt) {
          actions.editTodo(todoId);
        };
      };

      var onDestroyTodo = function(todoId) {
        return function(_evt) {
          actions.deleteTodoId(todoId);
        };
      };

      return m("li" + todoClasses, [
        m("div.view", [
          m("input.toggle[type=checkbox]", {checked: todo.completed,
            onchange: onToggleTodo(todo.id)}),
          m("label", {ondblclick: onEditTodo(todo.id)}, todo.title),
          m("button.destroy", {onclick: onDestroyTodo(todo.id)})
        ]),
        input
      ]);
    };
  };

  var footer = function(model, actions) {
    var notCompleted = function(todo) { return !todo.completed; };
    var itemsLeft = model.todos.filter(notCompleted).length;
    var itemsLeftText = model.todos.length > 0 ?
      (String(itemsLeft) + " item" + (itemsLeft === 1 ? "" : "s") + " left") : "";
    var onClearCompleted = function(_evt) {
      actions.clearCompleted();
    };
    var clearCompleted = (model.todos.length - itemsLeft) > 0 ?
      m("button.clear-completed", {onclick: onClearCompleted}, "Clear completed") : m("span");

    var allSelected = !model.filter || model.filter.length < 2;
    var activeSelected = model.filter === "active";
    var completedSelected = model.filter === "completed";

    return m("footer.footer", [
      m("span.todo-count", itemsLeftText),
      m("ul.filters", [
        m("li", [m("a", {href: "#/", class: allSelected ? "selected" : ""}, "All")]),
        m("li", [m("a", {href: "#/active", class: activeSelected ? "selected" : ""}, "Active")]),
        m("li", [m("a", {href: "#/completed", class: completedSelected ? "selected" : ""}, "Completed")])
      ]),
      clearCompleted
    ]);
  };

  var todoapp = function(model, actions) {
    return m("section.todoapp", [
      header(actions),
      main(model, actions),
      footer(model, actions)
    ]);
  };

  var info = function() {
    return m("footer.info", [
      m("p", "Double-click to edit a todo"),
      m("p", [m("span", "Meiosis - Mithril - Created by "), m("a", {href: "http://twitter.com/foxdonut00"}, "foxdonut00")]),
      m("p", [m("span", "Part of "), m("a", {href: "http://todomvc.com"}, "TodoMVC")])
    ]);
  };

  var view = function(model, actions) {
    return m("div", [todoapp(model, actions), info()]);
  };
  ref.view = view;
})(window);
