/*global m */
(function(ref) {
  var ENTER_KEY = 13;
  var ESCAPE_KEY = 27;

  var header = function(actions) {
    var onKeyPress = function(evt) {
      if (evt.keyCode === ENTER_KEY) {
        actions.saveTodo(evt.target.value);
      }
    };

    return m("header.header", [
      m("h1", "todos"),
      m("input.new-todo", {placeholder: "What needs to be done?", autoFocus: true, onkeypress: onKeyPress})
    ]);
  };

  var main = function(model, actions) {
    var renderedTodos = model.todos.map(renderTodo(actions));

    return m("section.main", [
      m("input.toggle-all[type=checkbox]"),
      m("label", {for: "toggle-all"}, "Mark all as complete"),
      m("ul.todo-list", renderedTodos)
    ]);
  };

  var classIf = function(className) {
    return function(indicator) {
      return indicator ? className : "";
    };
  };

  var renderTodo = function(actions) {
    return function(todo) {
      var todoClasses = [
        classIf(".completed")(todo.completed),
        classIf(".editing")(todo.editing)
      ].join("");

      var onEditKeyUp = function(todoId) {
        return function(evt) {
          if (evt.keyCode === ESCAPE_KEY) {
            actions.cancelEdit(todoId);
          }
          else if (evt.keyCode === ENTER_KEY) {
            actions.saveTodo(evt.target.value, todoId);
          }
        };
      };

      var onEditBlur = function(todoId) {
        return function(evt) {
          actions.saveTodo(evt.target.value, todoId);
        };
      };

      var input = todo.editing ?
        m("input.edit[type=text]", {
          value: todo.title,
          onkeyup: onEditKeyUp(todo.id),
          onblur: onEditBlur(todo.id)
        }) : m("span");

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
    var onClearCompleted = function(_evt) {
      actions.clearCompleted();
    };
    var clearCompleted = model.clearCompleted ?
      m("button.clear-completed", {onclick: onClearCompleted}, "Clear completed") : m("span");

    var classSelected = classIf("selected");

    return m("footer.footer", [
      m("span.todo-count", model.itemsLeftText),
      m("ul.filters", [
        m("li", [m("a", {href: "#/", class: classSelected(model.allSelected)}, "All")]),
        m("li", [m("a", {href: "#/active", class: classSelected(model.activeSelected)}, "Active")]),
        m("li", [m("a", {href: "#/completed", class: classSelected(model.completedSelected)}, "Completed")])
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
